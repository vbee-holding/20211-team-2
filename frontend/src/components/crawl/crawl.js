import React, { Component, useState, useEffect } from 'react';
import './crawl.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import cheerio from 'cheerio';
import request from 'request-promise';
import express from 'express';

//const app = express();

//app.use(cors())
const Crawl = () => {
        //const [title, settile] = useState('')
        const [source, setsource] = useState('')
        
        const [url, seturl] = useState('')
        const [category, setcategory] = useState('')
        const [article, setarticle] = useState([])
        const [categories, setcategories] = useState([])
  
  //set state
  useEffect(() =>{
    axios.get('http://localhost:3000/categories').then((response)=>{
      setcategories(response.data);
  })
  },[categories])
  //set state
        useEffect(() =>{
          axios.get('http://localhost:3000/article').then((response)=>{
          setarticle(response.data);
        })
        },[article])
        
          const crawlNews = () =>{
            /*request(
              "https://dantri.com.vn/xa-hoi/chinh-tri.htm",
              (error, response, html) => {
                if (!error && response.statusCode == 200) {
                  const $ = cheerio.load(html);
                  const data = []; const date = new Date()
            
                  $(".news-item").each((index, el) => {
                    const link_item = $(el).find(".news-item__avatar").attr("href");
                    const title = $(el).find(".news-item__avatar").attr("title");
                    const thumbnail = $(el).find(".dt-thumbnail img").attr("src");
              const sapo= "gggg";
              source = 'https://khoahoc.tv/ai-tri-tue-nhan-tao';
              const cat = category;
              const time = date.getDate();
              //const description = $(el).find('.item-news .description a').text();
              data.push({ link:'https://khoahoc.tv/ai-tri-tue-nhan-tao'+ link_item, title: title, thumbnail: thumbnail, sapo: sapo, source: source , categories: cat, time : time })
            });
            data.map((x) => {
              //console.log(x);
              axios.post("http://localhost:3000/article", x);
            });
        //fs.writeFileSync('data-vnexpress.json', JSON.stringify(data));
            }
            else {
              console.log(error);
            }
          });
        */
          request('https://123job.vn/tuyen-dung', (error, response, html) => {
            if(!error && response.statusCode == 200) {
              const $ = cheerio.load(html);
              let data = []; const date = new Date()
              $('.job__list-item').each((index, el) => {
                let link_item = $(el).find('.job__list-item-title a').text();
                let  title = $(el).find('.job__list-item-company span').text();
                let thumbnail = $(el).find('.job__list-item-info').find('.address').text();
                let sapo = $(el).find('.job__list-item-info').find('.salary').text();
                let source = 'a'
                let category = 'aa'
                let time = date
              
                data.push({ link:'https://khoahoc.tv/ai-tri-tue-nhan-tao'+ link_item, title: title, thumbnail: thumbnail, sapo: sapo, source: source , category: category, time : time })
              })
                data.map((x) => {
              //console.log(x);
              axios.post("http://localhost:3000/article", x);
            });}})
              
            
          }                 
            return (
            <div className="container">
            <div className="py-4" >         
              <h4 >Crawl các bài báo</h4>             
              <div class="container">
                <div class="row">
                <div class="col-md-8">
                <form method="POST" >
                <div class="form-group">
                <label>Chọn chuyên mục</label>
                <select class="custom-select custom-select-lg mb-3 form-control" onChange={(event) =>(setcategory(event.target.value))}>                
                {                      
                        categories.map((val, key) => {
                          return(  
                            <option value={val.category} >{val.category}</option>
                          )
                        } 
                      )
                } 
                </select>
                    <label>Nguồn báo</label>
                    <select class="custom-select custom-select-lg mb-3 form-control" onChange={(event) =>(setsource(event.target.value))}>                                
                      <option>https://vnexpress.net/</option>
                      <option>https://vietnamnet.vn/</option>
                      <option>https://nhandan.vn/</option>
                      <option>https://khoahoc.tv/</option>
                </select>
                <label>Nhập url</label>
                <input class = "form-control" onChange={(event) =>(seturl(event.target.value))}></input>
                </div>
                <Link to = {'/crawl'} type="submit" id='crawl' name="submit" onClick={crawlNews} class="btn btn-primary" >crawl</Link>
                </form>
        </div>
    </div>
</div>
              </div>
              </div>
        )

 }
 export default Crawl;
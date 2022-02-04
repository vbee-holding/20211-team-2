import React from 'react';
import { Component, useState, useEffect} from 'react'
import './crawl.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import $ from 'jquery'; 

const Crawl = () => {
    const [source, setsource] = useState('');
    const [url, seturl] = useState('');
    const [category, setcategory] = useState('');
    const [article, setarticle] = useState([]);
    const [categories, setcategories] = useState([]);
    const [list, setlist] = useState([]);
  useEffect(() =>{
    axios.get('http://localhost:3000/url').then((response)=>{
    setlist(response.data);
  })
  },[list])
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
       
    function CrawlNews(){
      $.post("/Documents/20211-team-2-1/backend/admincrawl.js",
      {
        category: category,
        source: source,
        url: url
      },
      );
    }
        return (
          <div className="container">
            <div className="py-4" >         
              <h4 class = "text-success">Crawl các bài báo</h4>             
              <div class="container">
                <div class="row">
                <div class="col-md-8">
                <form method="POST" >
                <div class="form-group">
                <label>Chọn chuyên mục</label>
                <select class="custom-select custom-select-lg mb-3 form-control" onChange={(event) =>(setcategory(event.target.value))}>     
                <option selected>Chuyên mục</option>               
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
                    <option selected>Nguồn báo</option>                              
                      <option value='vnexpress'>vnexpress</option>  
                      <option value='khoa hoc tv'>Khoa hoc tv</option>
                    </select>
                <label>Nhập url</label>
                  
                <select class="custom-select custom-select-lg mb-3 form-control" onChange={(event) =>(seturl(event.target.value))}>  
                <option selected>Chọn url</option>               
                {                      
                        list.filter(x => x.source == source).map((val, key) =>
                         {
                          return(  
                            <option value={val.url} >{val.url}</option>
                          )
                        } 
                      )
                } 
                </select>
                
                </div>
                </form>
                <Link to = {'/crawl'} type="submit" id='crawl' name="submit" onClick={CrawlNews}  class="btn btn-primary" >crawl</Link>
                
                        
                    
                </div>
                
        </div>
    </div>
</div>
           
              </div>
              
        )

 }
 //export {flag}
 export default Crawl
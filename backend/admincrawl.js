import cheerio from 'cheerio';
import axios from 'axios';
import request from 'request-promise';
import Request  from 'express'
let src, u, c;
//let url = Request.Form("url")
let count = 0;

function crawl() {    
        
        request('https://vnexpress.net/khoa-hoc', (error, response, html) => {
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);
          let data = []; let date = new Date();
        $('.item-news').each((index, el) => {
          if(count<6)
          
          {
            let link_item = $(el).find('.item-news .title-news a').attr('href');
            let title = $(el).find('.item-news .title-news a').text();
            let thumbnail = 'https://s1cdn.vnecdn.net/vnexpress/restruct/i/v526/logo_default.jpg'//$(el).find('.item-news .thumb-art a picture img').attr('src');
            let sapo = $(el).find('.item-news .description a').text();
            let source = 'vnexpress'
            let category = 'Khoa học';
            let time = date
            data.push({ link: link_item, thumbnail: thumbnail, title: title, sapo: sapo, source: source, category: category, time: time })
            count = count +1;
          }
        });
        data.map((x) => {
          console.log(x);
          axios.post("http://localhost:3000/article", x);
        })}
        else {
          console.log(error);
        }
        });
        
          
      }
      
crawl()
export default crawl
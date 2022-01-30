import cheerio from 'cheerio';
import axios from 'axios';
import request from 'request-promise';
let src, u, c;



function crawl(src) {    
        if(src == 'vnexpress'){
        request('https://vnexpress.net/thoi-su/chinh-tri', (error, response, html) => {
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);
          let data = []; let date = new Date();
        $('.item-news').each((index, el) => {
            let link_item = $(el).find('.item-news .title-news a').attr('href');
            let title = $(el).find('.item-news .title-news a').text();
            let thumbnail = 'https://s1cdn.vnecdn.net/vnexpress/restruct/i/v526/logo_default.jpg'//$(el).find('.item-news .thumb-art a picture img').attr('src');
            let sapo = $(el).find('.item-news .description a').text();
            let source = 'vnexpress'
            let category = 'Chính trị-Xã hội';
            let time = date
            data.push({ link: 'https://vnexpress.net/' + link_item, thumbnail: thumbnail, title: title, sapo: sapo, source: source, category: category, time: time })
        });
        data.map((x) => {
          console.log(x);
          axios.post("http://localhost:3000/article", x);
        })}
        else {
          console.log(error);
        }
        });}
        if(src == 'khoa hoc tv'){
          request("https://khoahoc.tv/vu-tru", (error, response, html) => {
          if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);
          let data = [];let date = new Date()
          $(".listview").each((index, el) => {
          let link_item = $(el).find(".listitem clearfix .title a").attr("href");
          let title = $(el).find(".listitem clearfix a").text();
          let thumbnail = $(el).find(".listitem clearfix .thumb img").attr('src');
          let sapo = $(el).find(".listitem clearfix .decs").text();
          let source = 'khoa hoc tv'
          let category = 'Khoa học - công nghệ';
          let time = date
          data.push({
            link: link_item,
            title: title,
            thumbnail: thumbnail,
            sapo: sapo,
            source: source,
            category: category,
            time: time
          });
          data.map((x) => {
            console.log(x);
            //axios.post("http://localhost:3000/article", x);
          })}
          
          )}
          else {
            console.log(error);
          }
          }
          );
          }
      }
      
//crawl()
import cheerio from 'cheerio';
import axios from 'axios';
import request from 'request-promise';
let src, u, c;

request("https://khoahoc.tv/vu-tru", (error, response, html) => {
          if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);
          let data = [];let date = new Date()
          $(".listview").each((index, el) => {
          let link_item = $(el).find(".listitem clearfix .title a").attr("href");
          let title = $(el).find(".listitem clearfix .title a").text();
          let thumbnail = $(el).find(".listitem clearfix .thumb img").attr('src');
          let sapo = $(el).find(".listitem clearfix .decs").text();
          let source = 'khoa hoc tv'
          let category = 'Khoa học - công nghệ';
          let time = date
          data.push({
            link: "https://khoahoc.tv/vu-tru"+link_item,
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
import React, { Component, useState, useEffect } from 'react';
import './news.css';
import axios from 'axios';

const NewsList = () => {
    const [topicName, settopicName] = useState("");
    const [topicList, settopicList] = useState([])
  
  
    useEffect(() =>{
    axios.get('http://localhost:3000/topicList').then((response)=>{
      settopicList(response.data);
  })
  },[topicList])
   
        return (
            <div className="container">
            <div className="py-4" >         
              <h4 >Danh sách các bài báo</h4>
              <div class="row row-cols-1 row-cols-md-4 g-4 ">     
                      { 
                        topicList.map((val, key) => {
                          return(
                          <div class="col">
                          <div key={key} class="card text-dark border-primary bg-light mb-3 shadow " id='the'>
                                <div class="card-header text-primary header-dark">{val.topicName}</div>
                                <div class="card-body text-primary">
                                    <p class="card-text">Click để quản lý các bài báo thuộc chuyên mục {val.topicName}</p>
                                    <a><i  class="fa fa-hand-o-right fa-lg" aria-hidden="true"></i>     <button class="btn btn-primary">Xem </button></a>
                                </div>
                          </div>
                          </div>
                          )
                          }
                        )
                      }
                </div>
              </div>
              </div>
        )

 }
 export default NewsList;
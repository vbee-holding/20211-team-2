import React, { Component, useState, useEffect } from 'react';
import './news.css';
import axios from 'axios';

const NewsList = () => {
        const [article, setarticle] = useState([])
  
  //set state
        useEffect(() =>{
          axios.get('http://localhost:3000/article').then((response)=>{
          setarticle(response.data);
        })
        },[article])
   
        return (
            <div className="container">
            <div className="py-4" >         
              <h4 >Danh sách các bài báo</h4>
              <div class="admin-subcontent table-responsive">
                    <table class="table table-striped table-sm" id="table-xe">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên bài báo</th>                                              
                                <th scope="col">Action</th>   
                            </tr>
                        </thead>
                        <tbody> 
                      {                      
                        article.map((val, key) => {
                          return(  
                                  <tr>
                                      <td>{key+1}</td>
                                      <td>{val.link}</td>                                
                                      <td><a class="btn btn-primary" type="button"  >Xem </a></td>
                                      <div className='flex mb-3 gap-5 overflow-hidden'></div>            
                                  </tr>
                          )
                        } 
                      )
                      }                       
                        </tbody>
                    </table>                               
              </div>
              </div>
              </div>
      )

 }
 export default NewsList;
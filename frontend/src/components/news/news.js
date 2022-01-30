import React, { Component, useState, useEffect } from 'react';
import './news.css';
import axios from 'axios';
import { Link, Route, Routes, useParams } from 'react-router-dom';

const NewsList = () => {
        const [articles, setarticles] = useState([])
        useEffect(() =>{
          axios.get('http://localhost:3000/article').then((response)=>{
          setarticles(response.data.reverse());
        })
        },[articles])
        const deleteArticle = async (id) =>{
          await axios.delete(`http://localhost:3000/deleteArticle/${id}`);    
        }

        return (
            <div className="container">
            <div className="py-4" >         
              <h4 class = "text-success">Danh sách các bài báo</h4>
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
                        articles.map((val, key) => {
                          return(  
                                  <tr>
                                      <td>{key+1}</td>
                                      <td>{val.title}</td>    
                                      <td><Link to={`/article/${val._id}`}class="btn btn-primary" type="button"  >Xem </Link>
                                      <a>  </a><a class="btn btn-danger" onClick={() => deleteArticle(val._id)}   type="button" ><i class="fa fa-trash"></i></a></td>
                                                 
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
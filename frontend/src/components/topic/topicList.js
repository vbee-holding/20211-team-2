import React, { Component, useState, useEffect}from 'react';
import './topic.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const TopicList = () => {
  const [topicName, settopicName] = useState("");
  const [topicList, settopicList] = useState([])
  //const [newTopic, setnewTopic] = useState("");
  let navigate = useNavigate()

  useEffect(() =>{
    axios.get('http://localhost:3000/topiclist').then((response)=>{
        settopicList(response.data)
    })
  },[])
   
   const addToList = () =>{
     console.log(topicName)
     axios.post('http://localhost:3000/topic',{topicName: topicName});
     settopicList([...topicList,{topicName: topicName} ])
    
   }
   const updateTopic = (id) =>{
    const newTopic = prompt("Nhập tên chuyên mục: ");
    axios.put("http://localhost:3000/updatetopic", {
      id: id,
      newTopic: newTopic
    }).then(() => {
      settopicList(
        topicList.map((val) => {
          return val._id == id ? { _id: id, topicName: val.newTopic} : val;
        })
      );
    });

     
 
   }
   const deleteTopic = (id) =>{
      axios.delete(`http://localhost:3000/delete/${id}`);
      
   }


        return (
            <div className="container">
            <div className="py-4" >
            <h4 >Điền form dưới đây để thêm chuyên mục</h4>
                    <div class="input-group flex-nowrap shadow"id='them' >
                        <span class="input-group-text" id="addon-wrapping">Tên chuyên mục</span>
                        <input type="text" onChange={(event) =>(settopicName(event.target.value))} class="form-control" placeholder="Tên chuyên mục muốn thêm" aria-label="Username" aria-describedby="addon-wrapping"/>
                        <button class="btn btn-primary" onClick={addToList}>Thêm</button>
                    </div> 
              <h4 >Danh sách các chuyên mục</h4>
              <div class="row row-cols-1 row-cols-md-4 g-4 ">     
                      { 
                        
                        topicList.map((val, key) => {
                          return(
                            
                          <div class="col">
                          <div key={key} class="card text-dark bg-light mb-3 shadow " id='the'>
                          <div class="card-header header-dark">{val.topicName}</div>
                          <div class="card-body">
                          
                          <a class="btn btn-danger" href='/' onClick={() => deleteTopic(val._id)}  type="button" ><i class="fa fa-trash"></i></a>
                          <a>  </a>
                          <a class="btn btn-primary"   onClick={() => updateTopic(val._id)} type="button"  ><i class="fa fa-pencil"></i> </a>
                          
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
export default TopicList;
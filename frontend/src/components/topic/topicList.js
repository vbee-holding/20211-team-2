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
    const newTopic = prompt("Nhập tên chuyên mục muốn thay đổi: ");
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
               <div>   
              <div class="admin-subcontent table-responsive">
                    <table class="table table-striped table-sm" id="table-xe">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên chuyên mục</th>                                           
                                <th scope="col">Action</th>           
                            </tr>
                        </thead>
                        <tbody> 
                      {                      
                        topicList.map((val, key) => {
                          return(  
                                  <tr>
                                      <td>{key+1}</td>
                                      <td >{val.topicName}</td>
                                      <td><a class="btn btn-primary"   onClick={() => updateTopic(val._id)} type="button"  ><i class="fa fa-pencil"></i> </a>
                                      <a>  </a>                           
                                      <a class="btn btn-danger"  onClick={() => deleteTopic(val._id)}  type="button" ><i class="fa fa-trash"></i></a></td>          
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
              </div>
        )
        
    }
export default TopicList;
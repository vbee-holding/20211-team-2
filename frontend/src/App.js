import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route,Switch, Routes} from "react-router-dom";
import Navbar from "./components/navbar.component"
import SideBar from './components/sidebar.component';
import TopicList from './components/topic/topicList'
import NewsList from './components/news/news';
import UserList from './components/user/user';
import Static from './components/static/static';
function App(props) {
  return (   
      <> <SideBar />
            <div className="App">
              <Navbar/>
                <Routes>
                  <Route exact path="/" element={<TopicList />} />
                  <Route exact path="/news" element={<NewsList />} />
                  <Route exact path="/users" element={<UserList/>} />
                  <Route exact path="/static" element={<Static/>} />
                </Routes>
             </div>
      </>
  
        
  );
}

export default App;
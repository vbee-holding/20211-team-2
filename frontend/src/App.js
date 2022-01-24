import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route,Switch, Routes} from "react-router-dom";
import Navbar from "./components/navbar.component"
import SideBar from './components/sidebar.component';
import Categories from './components/categories/categories';
import NewsList from './components/news/news';
import UserList from './components/user/user';
import Static from './components/static/static';
import Crawl from './components/crawl/crawl';
function App(props) {
  return (   
      <> <SideBar />
            <div className="App">
              <Navbar/>
                <Routes>
                  <Route exact path="/" element={<Categories />} />
                  <Route exact path="/news" element={<NewsList />} />
                  <Route exact path="/users" element={<UserList/>} />
                  <Route exact path="/crawl" element={<Crawl/>} />
                  <Route exact path="/static" element={<Static/>} />
                </Routes>
             </div>
      </>
  
        
  );
}

export default App;
import React from 'react';
import './App.css';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

// Routes
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="app-container">
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

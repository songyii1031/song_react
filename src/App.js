import React from 'react';    
import { Routes, Route } from "react-router-dom";
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import MyPage from './components/pages/MyPage';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Modal from './components/pages/modal/Modal';
// import Popup from './components/pages/Popup';
import './App.css';
 
function App() {
  return (  
    <div className="app">
      <NavMenu />
      <main className="content">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes> 
      </main>
      <Footer />
    </div> 
  );
}

export default App;

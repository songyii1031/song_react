import React from 'react';    
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import MyPage from './components/MyPage';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
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

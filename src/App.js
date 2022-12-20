import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Companies from './pages/Companies';
import Assessments from './pages/Assessments';
import NoRoute from './pages/NoRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/companies" element={<Companies />}/>
        <Route path="/assessments" element={<Assessments />}/>
        <Route path='*' element={<NoRoute/>} />
      </Routes>
    </div>
  );
}

export default App;

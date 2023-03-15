import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Companies from './pages/Companies/Companies';
import Assessments from './pages/Assessments/Assessments';
import NoRoute from './pages/NoRoute/NoRoute';
import MenuBar from './components/MenuBar/MenuBar';
import TaskPage from './pages/TaskPage/TaskPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/companies" element={<Companies />}/>
        <Route path="/assessments" element={<Assessments />}/>
        <Route path="/task" element={<TaskPage />} />
        <Route path='*' element={<NoRoute/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

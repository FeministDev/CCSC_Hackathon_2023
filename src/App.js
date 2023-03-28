import './App.css';
import { useEffect } from 'react';

import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import { Routes, Route } from 'react-router-dom';


function App() { 
  useEffect(()=> {

  }, []);
  return (
    <Routes>
      <Route path = "/" element = {< HomePage />}/>
      <Route path = "/test" element = {< TestPage />}/>
    </Routes>

  );
}

export default App;

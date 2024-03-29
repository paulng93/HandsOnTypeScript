import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/Home';
import Thread from './components/routes/threads/Thread';
import UserProfile from './components/routes/userProfile/UserProfile';

// define routes here
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/categorythreads/:categoryId" element={<Home/>} />
      <Route path="/thread/:id" element={<Thread/>} />
      <Route path="/userprofile/:id" element={<UserProfile/>} />
    </Routes>
  );
}

export default App;

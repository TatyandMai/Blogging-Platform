import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Post from './pages/Post';
import Favorite from './pages/Favorite';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/post' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

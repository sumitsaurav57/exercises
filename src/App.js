import Navbar from './Navbar';
import Input from './input';
import './App.css';
import { useState } from 'react';
import img2 from './images/3.svg'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './Home';
import ExerciseDetail from './ExerciseDetail';
import Footer from './Footer';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', ' ')] = r(item);
  })
  return images;
}

function App() {
/*   const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  console.log(images) */
/*   const img = img2; */
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail/> } />       
      </Routes>
   </Box>
  );
}

export default App;

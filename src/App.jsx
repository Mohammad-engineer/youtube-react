import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './components'

const App =() => {
 

  return (
   <BrowserRouter>
    <Box sx={{background:'#000',color:'#fff'}}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route  path='/video/:id' element={<VideoDetail />} />
        <Route  path='/channel/:id' element={<ChannelDetail />} />
        <Route  path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
   </BrowserRouter>
  )
}

export default App
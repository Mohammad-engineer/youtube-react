import React from 'react'
import { Stack } from '@mui/material';
import {Link} from 'react-router-dom'
import {logo} from '../utils/constants';
//import YouTubeLogo from '../assets/youtube-logo.png';
//import YouTubeLogo from '../assets/clipart-youtube-logo-removebg-preview.png';
import YouTubeLogo from '../assets/youtube.svg';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{position:'sticky',background:'#000',top:0,justifyContent:'space-between'}}
    >
      <Link to='/' style={{display:'flex',alignItems:'center'}}>
        <img src={YouTubeLogo} alt='logo' height={45} style={{padding:'3px 13px', background:'#fff',borderRadius:'8px'}}/>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
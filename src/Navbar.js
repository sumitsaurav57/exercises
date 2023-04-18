import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import img from './images/Brain_.png';
const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
      px="20px"
    >
      <Link to="/">
        <img src={ img} style={{width:'58px',height:'58px',margin:'0 20px'}} />
      </Link>
      <Stack direction='row'
        gap="40px"
        fontSize='24px'
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FF2625" }}>Home</Link>
        <a href='#exercises' style={{textDecoration:'none',color:'#3a1212'}}>Exercise</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
import { Box } from '@mui/material'
import React from 'react'
import Sidenav from '../components/Navigation/Sidenav'
import Navbar from '../components/Navigation/Navbar';

const Settings = () => {
  return (
    <>
    <Navbar/> 
    <Box height={30} />
      <Box sx={{display: 'flex'}}>
        <Sidenav/>
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <h1>Settings...</h1>
        </Box>
      </Box>
    </>
  )
}

export default Settings
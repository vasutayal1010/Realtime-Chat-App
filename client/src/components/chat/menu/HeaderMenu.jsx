import React from 'react'
import { MoreVert } from '@mui/icons-material'
import { Menu,MenuItem, styled } from '@mui/material';
import { useState } from 'react';

const MenuOption = styled(MenuItem)`
font-size : 14px;
padding : 15px 60px 5px 24px;
color : #4A4A4A;
`

const HeaderMenu = () => {
    const [open,setOpen] = useState(null);

    const handleClose = ()=>{
        setOpen(null);
    }

    const handleClick = (e) =>{
        setOpen(e.currentTarget);
    }
  return (
    <>
      <MoreVert onClick={handleClick}/>
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
            verticle : "bottom",
            horizontal : "center"
            
        }} 
        transformOrigin={{
            verticle :"top",
            horizontal : "right"
        }}
      >
        <MenuOption onClick={handleClose}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </>
  );
}

export default HeaderMenu
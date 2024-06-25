import React from 'react'
import { Box, Drawer, Typography, styled } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile';

const Drawerstyle = {
  left: 20,
  top: 17,
  height: "95%",
  width: "30%",
  boxShadow: "none",
};

const ChangeFont = styled(Typography)`
    font-size = 18px;
`
const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #ffffff;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;

const InfoDrawer = ({open,setOpen}) => {
    const handleClose = ()=>{
        setOpen(false);
    }
  return (
    <Drawer
        open={open}
        onclose={handleClose}
        PaperProps={{sx:Drawerstyle}}
        style = {{zIndex : 1500}}

    >
        <Header>
            <ArrowBack onClick={() => setOpen(false)}/>
            <ChangeFont>Profile</ChangeFont>
         
        </Header>
        <Box>
            <Profile/>
        </Box>

    </Drawer>
  )
}

export default InfoDrawer
import React from 'react'
import LoginDialog from './account/LoginDialog'
import {AppBar,Toolbar,Box, styled} from '@mui/material'

const Component = styled(Box)`
    height : 100vh;
    background : #DCDCDC;
`
const Header = styled(AppBar)`
    height : 200px;
    background-color : #00bfa5;
`
const Messenger = () => {
  return (
    <Component>
        <Header>
            <Toolbar>

            </Toolbar>
        </Header>
        
        <LoginDialog/>
    </Component>
  )
}

export default Messenger;
import { Dialog,Box, styled } from '@mui/material';
import React from 'react'
import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';

const dialogStyle = {
  height: "95%",
  margin : "20px",
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  backgoundColor : "none",
  borderRadius : "0px"
};

const Component = styled(Box)`
    display : flex;
`
const LeftComponenet = styled(Box)
`
  min-width : 450px;
`
const RightComponenet = styled(Box) `
  width : 73%,
  min-width : 300px,
  height : 100%,
  border-left : 1px solid rgba(0,0,0,0.14)

`


const ChatDialog = () => {
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      maxWidth={'md'}
    >
      <Component>
        <LeftComponenet>
            <Menu/>
        </LeftComponenet>
        <RightComponenet>
            <EmptyChat/>
        </RightComponenet>
      </Component>



    </Dialog>
  );
}

export default ChatDialog;
import { useContext } from "react";
import React from "react";
import {AccountContext} from "../context/AccountProvider";
import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, Box, styled } from "@mui/material";
import ChatDialog from "./chat/ChatDialog";


const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`
const LoginHeader = styled(AppBar)`
  height: 200px;
  background-color: #00bfa5;
`
const Header = styled(AppBar)`
  height: 130px;
  background-color: #00A884;
`;


const Messenger = () => {
  const {account} = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>

          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar>

            </Toolbar>
          </LoginHeader>

          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;

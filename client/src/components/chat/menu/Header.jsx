import React, { useContext, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { styled ,Box} from '@mui/material'
import {Chat as MessageIcon,MoreVert} from '@mui/icons-material'
import HeaderMenu from './HeaderMenu'
import InfoDrawer from '../../drawer/InfoDrawer'

const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
  }
    & :first-child{
    font-size : 22px;
    margin-right : 8px;
    margin-to : 3px;
    }
`;

const Image = styled("img")({
  width: 40,
  height: 40,
  borderRadius: "50%",
});


const Header=()=> {
    const {account} = useContext(AccountContext)
    const [openDrawer,setOpenDrawer] = useState(false);
    
const toogleDrawer = ()=>{
  setOpenDrawer(true);
}
  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={() => toogleDrawer()} />
        <Wrapper>
          <MessageIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
}

export default Header
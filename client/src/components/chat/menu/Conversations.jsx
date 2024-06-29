import React, { useState , useContext} from 'react'
import { useEffect } from 'react'
import { getUsers } from '../../../service/api';
import Conversation from './Conversation';
import { Box, Divider, styled } from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';

const Component = styled(Box)`
    height : 81vh;
    overflow: overlay;
`

const StyledDivider = styled(Divider)`
    margin :  0 0 0 70px;
    background-color : #e9edef;
    opacity : 0.6;
`

const Conversations = ()=> {
    const [users,setUsers] = useState([]);
    const {account} = useContext(AccountContext);

    useEffect(()=>{
        const fetchData = async()=>{
            let response  = await getUsers();
            setUsers(response);
        }
        fetchData();
    },[]);
  return (
   <Component>
    {
        users.map(user=> (
            user.sub!==account.sub &&
            <>
            <Conversation user={user}/>
            <StyledDivider/>
            </>
        ))
    }
   </Component>
  )
}

export default Conversations
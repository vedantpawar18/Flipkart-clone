import { Box, Button, Typography , styled} from '@mui/material'
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialogue from '../Login/LoginDialogue';
import { useState } from 'react';
import { DataContext } from '../../Context/ContextProvider';
import { useContext } from 'react';
import Profile from './Profile';

const LoginButton = styled(Button)`
background-color:#fff;
color: #2874f0;
text-transform: none;
font-weight: 600;
border-radius: 2;
padding: 5px 40px;
height: 32;
box-shadow: none;
`

const Wrapper = styled(Box)`
    display:flex;
    margin: 24px;
    width:100%;
    justify-content:space-between
`;


const Container = styled(Box)`
    display:flex;
    align-items:center
   
`;
const CustomButtons = () => {
  const [open , setOpen]= useState(false);

  const {account, setAccount} = useContext(DataContext)

  const setLogin =()=>{
    setOpen(true)
  }

  return (
      <Wrapper>
        {
          account ? <Profile account={account} setAccount={setAccount}/> :
          <LoginButton onClick={()=>setLogin()} variant="contained">Login</LoginButton>
        }
       
        <Typography style={{ marginTop: 3, width: 135 }}>Become a seller</Typography>
        <Typography style={{ marginTop: 3 }}>More</Typography>

        <Container>
          <ShoppingCartIcon/>
          <Typography>Cart</Typography>
        </Container>
        <LoginDialogue open={open} setOpen={setOpen}/>
      </Wrapper>
  )
}

export default CustomButtons
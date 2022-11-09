import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import { Button, TextField, Typography, styled } from '@mui/material';
import { authenticateSignup } from '../../Service/api';
import { DataContext } from '../../Context/ContextProvider';
import { useContext } from 'react';

const Component= styled(Box)`
height: 88vh;
width: 70vh;
padding: 0;
padding-top: 0;
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const accountInitialValues = {
    login: {
        view: 'login'
    },
    signup: {
        view: 'signup'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const LoginDialogue = ({open, setOpen}) => {
    const [ account, toggleAccount ] = useState(accountInitialValues.login);
    const [ signup, setSignup ] = useState(signupInitialValues);

    const { setAccount}= useContext(DataContext)

    const handleClose= () =>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
    }


  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
        <Component>
           {
            account.view === 'login' ? 
             <Wrapper>
             <TextField variant='standard' label="Enter email/mobile number" />
             <TextField variant='standard' label="Enter password" />
             <Text >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
             <LoginButton>Login</LoginButton>
             <Typography style={{textAlign:'center'}}>OR</Typography>
             <RequestOTP>Request OTP</RequestOTP>
             <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
         </Wrapper>:
         <Wrapper>
         <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
         <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
         <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
         <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
         <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
         <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
         <LoginButton onClick={() => signupUser()} >Continue</LoginButton>
                        
         </Wrapper>
           }
        </Component>
    </Dialog>
  )
}

export default LoginDialogue
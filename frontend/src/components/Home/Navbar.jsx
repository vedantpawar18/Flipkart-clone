import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import { navData } from '../../constants/data';

const Content = styled(Box)`
display:flex;
justify-content: space-between;
margin: 55px 130px 0 130px;
`;

const Container= styled(Box)`
padding: 12px 8px;
text-align: center
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const Navbar = () => {
  return (
    <Content>
        {
            navData.map((data)=>{
               return <Container key={data.text}>
                    <img style={{  width: 64 }}  src={data.url} alt=""/>
                    <Text>{data.text}</Text>
                </Container>
            })
        }
    </Content>
  )
}

export default Navbar
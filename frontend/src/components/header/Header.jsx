import React from 'react'
import {Toolbar,styled} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
background: #2874f0;
height: 55px;
`;

const Component= styled(Box)`
margin-left:12%
`
const CustomButtonWrapper= styled(Box)`
margin: 0 12% 0 auto;
`

const Header = () => {
  return (
    <div>
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
                <Component>
                    <img style={{width:75}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo"  />
                </Component>
            <Search/>
            <CustomButtonWrapper>
                <CustomButtons />
            </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    </div>
  )
}

export default Header
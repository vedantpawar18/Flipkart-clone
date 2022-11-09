import { Box, styled } from '@mui/system'
import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'

const Component= styled(Box)`
padding:10px;
background:#f2f2f2
`

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Component>
        <Banner />
        </Component>
    </div>
  )
}

export default Home
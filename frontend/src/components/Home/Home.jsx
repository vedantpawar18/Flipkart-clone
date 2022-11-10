import { Box, styled } from '@mui/system'
import React, { useEffect } from 'react'
import { getProducts } from '../../Redux/actions/productActions' 
import Banner from './Banner'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux';

const Component= styled(Box)`
padding:10px;
background:#f2f2f2
`

const Home = () => {

  const {products}= useSelector (state => state.getProducts);

  console.log(products)

 const dispatch = useDispatch();

  useEffect (()=>{
    dispatch(getProducts());
  }, [dispatch]);

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
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import React from 'react'
import CardBox from './CardBox';

const Item = styled(Box)`
background : rgb(185, 210, 219);
margin: 25px;
padding: 10px;
text-align: center;

margin-top : 25px;
`


const Cart = () => {
 
  return (
<>
    <Item>
     
      Cart Items..
      </Item>
      <CardBox/>
      </>
    
  )
}

export default Cart
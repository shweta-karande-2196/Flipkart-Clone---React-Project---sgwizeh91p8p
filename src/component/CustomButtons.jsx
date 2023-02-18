import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import LoginDialog from '../component/Login/LoginDialog'
import { useState } from 'react';
import { Link } from 'react-router-dom';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from '@emotion/styled';

const Wrapper = styled(Box)`
display : flex;
margin : '0 3% 0 auto';
& > button , & > p , & > div{
   margin-right: 40px;
   font-size: 14px;

}
`
const Container = styled(Link)`
display: flex;
color: white;
text-decoration: none;
`

const LoginButton = styled(Button)`

color: #2874f0;
background : white;
padding : 5px 40px;
border-radius: 2px;
box-shadow : none;
font-weight : 600;
height : 32

`


const CustomButtons = () => {

  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
}
  return (
    <Wrapper>
        <LoginButton variant='contained' onClick={() => openDialog()}>Login</LoginButton>
        <Typography style={{marginTop : 3, width: 135}}>Become a Seller</Typography>
        <Typography style={{marginTop : 3}}>More</Typography>

        <Container to='/cart' >
            <ShoppingCartIcon/>
            <Typography>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}  /> 
        {/* login component call
        open setOpen are props which passed in LoginDialog component */}

    </Wrapper>
  )
}

export default CustomButtons
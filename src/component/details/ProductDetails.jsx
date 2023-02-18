import { Box } from '@mui/system'
import React from 'react'
import { product } from '../../constant/data'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import {updateCartItem} from '../Home/Home.jsx';

const Image= styled('img')`
margin: 70px 0 50px 100px ;

`
const DetailInfo = styled(Box)`
display: flex;

`
const Info = styled(Box)`
margin: 2vw 0 0 10vw;

`

const ButtonInfo = styled(Box)`
display : flex;
justify-content : center;

`

const ProductDetails = () => {
    const {id}= useParams();
    // console.log(id);
    const details = product.filter(item=>item.id==id)
    // console.log(details);
    // console.log(product);

const AddToCart =()=>{
  updateCartItem(id);
}
    
  return (
    
   <DetailInfo>
    <Box style={{background: "rgb(245, 243, 243)"}}>
      <Box>
      <Image src={details[0].image} style={{width:250}} alt='productImg'/>
      </Box>
      <ButtonInfo >
      <Button style={{background: 'orangered', margin: 10 , color:'white'}} onClick={AddToCart}>ADD TO CART</Button>
      <Button style={{background: 'orangered', margin: 10, color:'white'}}>BUY NOW</Button>
      </ButtonInfo>
     

    </Box>
    <Info>
        <h3>{details[0].title}</h3>
        <Box style={{display : "flex"}}>
          <button style={{background: 'green', border: "none" , borderRadius:5, color: "white"}}>{details[0].rating.rate}*</button>
          <Typography>({details[0].rating.count})</Typography>
        </Box>
        <h2>${details[0].price}</h2>
        <Typography style={{fontWeight:'bold'}}>Description : </Typography><br/>
        <Typography>{details[0].description}</Typography>

    </Info>
    <Box></Box>

   </DetailInfo>
  )
}

export default ProductDetails
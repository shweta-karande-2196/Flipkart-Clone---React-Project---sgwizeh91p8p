import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React  from 'react'
import { product } from '../../constant/data'
// import Electronics from './Electronics'
// import ProductName from './ProductName'

const ProductHeadStyle = styled(Box)`

display :flex
justify-content : space-between;
flex-direction: row;
border: 1px solid;
box-sizing: border-box;
// height : 70px;
align-item : center;
overflow : none
border-width: thin;
`


const Btn = styled(Button)`

background-color: blue;
color : #fff;
height :35px;
padding : 10px 10px;

margin-left: 90%


`



const ProductHeading = (props) => {

 
   const handleAllProducts = ()=>{
    product.map(item=>{
      
      
      <Box>
        
      <img src={item.image} alt='img'/>
      <Typography>{item.title}</Typography>
      </Box>
    })
   }

  return (
    <Box>
    <Box>

     <ProductHeadStyle>    
       <h1>{props.name}</h1>
       <Btn onClick={handleAllProducts}>View All</Btn>

      </ProductHeadStyle>

       
        
    </Box>

    

    </Box>
  )
}

export default ProductHeading
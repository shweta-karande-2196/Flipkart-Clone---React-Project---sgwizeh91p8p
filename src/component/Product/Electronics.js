import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { product } from '../../constant/data'
import ProductHeading from './ProductHeading'
import { Link } from 'react-router-dom'

const Component = styled(Box)`
        display: flex;
        margin : 55px 130px 0 130px;
        justify-content: space-between;
        

`

const Container = styled(Box)`
padding : 12px 8px;
text-align : center;
&:hover {
  background-color: rgb(231, 224, 224);

  box-shadow: #282c34;
  border : 1px solid #282c34;
  border-radius: 5px
}
`
const Title = styled(Typography)`
font-weight: bold;
color: black;
font-size: small;
margin-bottom: 10px;
  



`


const Electronics = () => {
  const electronic =product.filter(item=>item.category === "electronics")
  return (
    <Box Style={{margin : 10}}>
         <ProductHeading name ="Electronics"/>
    <Component>
    {
        electronic.map((data) =>{
            return <Link to={`product/${data.id}`} style={{textDecoration: 'none'}}>
              <Container>
                <img src={data.image} alt='data' style={{width : 100}}/>
                <Title>{data.title}</Title>
                <Typography style={{color:'green'}}>${data.price}</Typography>

            </Container>
            </Link>
            
        })
    }

   </Component>

      </Box>
   
    
  )
}

export default Electronics
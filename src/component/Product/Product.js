

import React from 'react'
// import { product } from '../../constant/data'
import { Box } from '@mui/system'
// import styled from '@emotion/styled'
// import ProductHeading from './ProductHeading'
import Electronics from './Electronics'
import Jewelery from './Jewelery'
import Womens from './Womens'
import Mens from './Mens'





const Product = () => {
  return (
   <Box>
    
    

    <Box>
      <Electronics />
      <Jewelery />
      <Womens />
      <Mens />   
    </Box>

        

   </Box>
  )
}

export default Product
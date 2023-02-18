import React from 'react'
import { Box} from '@mui/system'
import { navData } from '../../constant/data'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'

const Component = styled(Box)`
        display: flex;
        margin : 55px 130px 0 130px;
        justify-content : space-between;
`

const Container = styled(Box)`
padding : 12px 8px;
text-align : center;
`
const Text = styled(Typography)`
font-size :14px;
font-weight : 600;
font-family : inherit;



`
const Navbar = () => {
  return (
   <Component>
    {
        navData.map((data) =>{
            return <Container>
                <img src={data.url} alt='data' style={{width : 64}}/>
                <Text>{data.text}</Text>
            </Container>
            
        })
    }

   </Component>
  )
}

export default Navbar
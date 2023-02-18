import React from 'react'
import {AppBar, Toolbar, styled, Typography} from '@mui/material'
import { Box} from '@mui/system';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';
const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height : 55px
    
`;

const Component = styled(Link)`
margin-left:12%;
line-height: 0;
text-decoration : none;
color:inherit;
`;

const Subheading = styled(Typography)`
font-size: 10px;
font-style : italic
`


const PlusImage = styled('img')({
  width :10,
heigth :10 ,
marginLeft :4


});

const CustomButtonWrapper = styled(Box)`
margin : 0 3% ;
`



const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyledHeader>
      <Toolbar style ={{minHeight : 55}} >
          
          <Component to='/'>
          <img src={logoURL} alt= 'logo' style ={{width : 75}} />
          <Box style={{ display: 'flex' }}>
            <Subheading>Explore&nbsp
              <Box component='span' style ={{color : '#FFE500'}} >Plus</Box></Subheading>
              <PlusImage src={subURL} />
          </Box>
          </Component>
         
          <Search/>


          <CustomButtonWrapper>
             <CustomButtons />
          </CustomButtonWrapper>


    </Toolbar>
    </StyledHeader>
  
  )
}

export default Header


// Box is replacemet of div tag
// Typography is repalacement of p tag
// TextField => input box

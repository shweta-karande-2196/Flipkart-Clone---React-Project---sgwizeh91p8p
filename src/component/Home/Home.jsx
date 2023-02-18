
import styled from '@emotion/styled'
import { Box } from '@mui/system'
import React,{useState} from 'react'
import Product from '../Product/Product'
import Banner from './Banner'
import Navbar from './Navbar'


const Component = styled(Box)`
padding : 10px 10px ;

background : #F2F2F2;
`
export let cardItem=[];

export const updateCartItem =(id)=>{
  cardItem=[...cardItem,id];
  console.log(cardItem,'cardItem')
}
export const removeCartItem =(id)=>{
  let filterOnlyOnce=true;
  cardItem=cardItem.filter(item=>{if(item!=id)
    {
  return item;
    }
    else if( item==id && filterOnlyOnce===false){
      return item;
    }
    else{
      filterOnlyOnce=false;
    }
  }
  );
  console.log(cardItem,'cardItem after removed')
}


const Home = () => {


  return (
    <>
    <Navbar />
    <Component>
       <Banner/>
    </Component>
    <Product updateCartItem={updateCartItem}/>
   
    </>
  )
}

export default Home
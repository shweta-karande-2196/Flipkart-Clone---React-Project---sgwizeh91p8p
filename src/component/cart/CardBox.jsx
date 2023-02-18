import React, { useState ,useEffect} from "react";
import { cardItem, removeCartItem } from "../Home/Home.jsx";
import { product } from "../../constant/data";
import { Box } from "@mui/system";
import {  Typography } from "@mui/material";
import styled from "@emotion/styled";


const Items = styled(Box)`
display: flex;
justify-content : space-between;
align-item: center;
width:50%;
margin: 0 auto;
text-align: center;
padding-top: 25px;

`


const CardBox = () => {
  const [updateProduct, setUpdateProduct] = useState(0);
  const [cardProduct, setCardProduct] = useState([]);

  useEffect(() => {
    console.log(cardItem,'cardItem')
    const details = product.map((item) => {
      let newProduct = {};
      let count = item.count || 0;
      cardItem.map((entity) => {
        if (item.id == entity) {
          newProduct = { ...item, count: count + 1 };
          count = count + 1;
        }
      });
      return newProduct;
    });
    setCardProduct(details.filter((item) => item.count > 0));
  }, [updateProduct]);

  console.log(cardProduct, "cardProduct");

  return (
    <Items>
      {cardProduct.map((item) => (
        <>
          <img src={item.image} alt="CartImg" style={{width:70}} />
          <Typography >{item.title}</Typography>
         
          <Typography style={{background:"rgb(185, 210, 219)", height: 30, padding:10}} type="number">{item.count}</Typography>
          <button style={{background:"rgb(185, 210, 219)" , borderRadius:10 ,height: 30, padding:10, border: 'none'}}
            onClick={() => {
              removeCartItem(item.id);
              setUpdateProduct(updateProduct + 1);
            }}
          >
            Remove
          </button>
        </>
      ))}
    </Items>
  );
};
export default CardBox;

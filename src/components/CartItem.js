import React,{ useContext} from 'react';
import {Context} from "../Context";
import styled from "styled-components"
import { FaBitbucket } from "react-icons/fa";
const CartItem = (props) => {
    const { id, author, url} = props
    const{ removeCartItems} = useContext(Context)
    
    return (
        <CartItemWrapper>
            <MainWrapper>
            <img src={url} alt={author} />
            <Delete onClick={() =>removeCartItems(id)}> Remove from Cart <FaBitbucket /> </Delete>
            </MainWrapper>
            
            
            
            <h3>$499</h3>
        </CartItemWrapper>
    )
}

export default CartItem
const CartItemWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin: 30px 0;


`
const MainWrapper = styled.div `
position: relative;
transition: transform .2s;
cursor: pointer;
border-radius: 5px;
  &:hover{
      transform: scale(1.1);
      border: 2px solid #fff;
  }
img{
    max-width: 300px;
    height: auto;
    width: 100%;
    object-fit: cover;
}
@media(max-width: 768px){
    max-width: 150px;
}
`
const Delete = styled.div`
position: absolute;
background-color: crimson;
text-align: center;
width: 100%;
font-size: 14px;
bottom: 0;
opacity: 0;
display: flex;
padding: 5px  0;
justify-content: space-around;
align-items: center;

${MainWrapper}:hover & {
opacity: 1;
`


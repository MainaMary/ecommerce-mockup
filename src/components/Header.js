import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import { Context } from '../Context';

import { RiShoppingCart2Fill,RiShoppingCart2Line} from "react-icons/ri";

const Header= () => {
  const {cartItems} = useContext(Context)
  function toggleIcon(){
    if(cartItems.length){
     return <RiShoppingCart2Fill/>
    }else{
      return <RiShoppingCart2Line />
    }
  }
  
    return (
        <HeaderWrapper>
          <StyledLink to="/">Photo Gallery</StyledLink>
          <StyledLink to="/cart">{toggleIcon()}</StyledLink>
        </HeaderWrapper>
         
    )
}

export default Header

const HeaderWrapper = styled.nav`
background-color: red;
height: 8vh;
display: flex;
justify-content: space-between;
padding: 0 50px;
align-items:center;
`
const StyledLink = styled(Link)`
text-decoration: none;
font-size: 1.8rem;
color: #000;
`
import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

import { RiShoppingCart2Fill} from "react-icons/ri";

const Header= () => {
    return (
        <HeaderWrapper>
          <StyledLink to="/">Thrifted Store</StyledLink>
          <StyledLink to="/cart"><RiShoppingCart2Fill/></StyledLink>
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
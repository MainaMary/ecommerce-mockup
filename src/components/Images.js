import React, { useState, useContext} from "react";
import { Context } from "../Context";
import styled from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { RiShoppingCart2Fill} from "react-icons/ri";


const Images = (props) => {
  const { addCartItems, cartItems} = useContext(Context);
  const { name, url,id, obj} = props;
  
  
  const [hovered, setHovered] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

 const cartIcon = () =>{
   const cartItemsExist = cartItems.some(item => item.id === id )
   if(cartItemsExist){
    return toggle ? <BsHeart /> : <RiShoppingCart2Fill />
   }
   else if(hovered){
    return <BsHeart onClick={()=> addCartItems(obj)} />
   }
 }
  
  //const cartIcon = hovered && <BsHeart />
  return (
    <Wrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
     
       <MainWrapper> 
        <Toggler onClick={handleToggle}>{toggle ? <BsHeartFill /> : <BsHeart />}</Toggler>
       <img src={url} alt={name} /> 
       <AddToCart> Add to cart{cartIcon()}</AddToCart>
       </MainWrapper>
     
      
    </Wrapper>
  );
};

export default Images;

const Wrapper = styled.div``
const Toggler = styled.div`
position: absolute;
top: 20px;
right: 20px;

`

const MainWrapper = styled.div`
position: relative;
transition: transform .2s;
cursor: pointer;
border-radius: 5px;
 max-width: 300px;
  &:hover{
      transform: scale(1.1);
      border: 2px solid #fff;
  }
img{
   
    height: 200px;
    width: 100%;
    object-fit: cover;
}
`
const AddToCart = styled.div`
position: absolute;
background-color: red;
text-align: center;
width: 100%;
font-size: 20px;
bottom: 0;
opacity: 0;
display: flex;
align-items: center;
justify-content:space-around;
padding: 10px 0;

${MainWrapper}:hover & {
opacity: 1;
`
Images.propTypes = {};

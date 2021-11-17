import React, { useState, useContext} from "react";
import { Context } from "../Context";
import styled from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { RiShoppingCart2Fill} from "react-icons/ri";


const Images = (props) => {
  const { addCartItems, cartItems} = useContext(Context);
  const { name, url,id, obj} = props;
  
  console.log(obj)
  
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
    <MainWrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Toggler onClick={handleToggle}>{toggle ? <BsHeartFill /> : <BsHeart />}</Toggler>
      <div onClick={handleToggle}>{cartIcon()}</div>
      <img src={url} alt={name} />  
      
    </MainWrapper>
  );
};

export default Images;

const Toggler = styled.div`

`
const MainWrapper = styled.div`
img{
    max-width: 300px;
    height: auto;
    width: 100%;
}
`
Images.propTypes = {};

import React, { useState} from "react";
import styled from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";



const Images = (props) => {
  const { url, name } = props;
  
  const [hovered, setHovered] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const cartIcon = hovered && <BsHeart />;
  return (
    <MainWrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Toggler onClick={handleToggle}>{toggle ? <BsHeartFill /> : <BsHeart />}</Toggler>
      {cartIcon}
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

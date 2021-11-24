import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const Modal = ({removeModal}) => {
    const navigate = useNavigate();
   const handleNavigate = () =>{
       navigate('/')
   }
   
    return (
        <Wrapper>
            <ModalContainer>
                <Remove onClick ={removeModal}> X</Remove>
               <h2>Add items to cart</h2>
               <Add onClick ={handleNavigate}>Add photos</Add>
            </ModalContainer>
        </Wrapper>
    )
}

export default Modal

const Wrapper = styled.div`
position: fixed;
 width: 100%;
 height:100vh;
 top: 0;
 left: 0;
 background-color: rgba( 200, 200, 200);
 opacity: .7;
 display: flex;
 justify-content: center;
 align-items: center
`

const ModalContainer =styled.div`
position: relative;
border-radius: 10px;
box-shadow: 0 0 3px #777;
margin-top: 100px;
width: 30%;
padding: 40px 0;
h2{
    text-align: center;
}

`
const Remove = styled.button`
position: absolute;
top: 10px;
right: 20px;
background-color: transparent;
`
const Add = styled.button`
background-color: #000;
color: crimson;
outline: none;
cursor: pointer;
padding: 5px 18px;
border: none;
border-radius: 10px;

`
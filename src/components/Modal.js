import React from 'react'
import styled from 'styled-components'

const Modal = () => {
    return (
        <Wrapper>
            <ModalContainer>
                <h2>Add items to cart</h2>
                <button>Add photos</button>
            </ModalContainer>
        </Wrapper>
    )
}

export default Modal

const Wrapper = styled.div`
 width: 100vw;
 height:100vh;
 top: 0;
 left: 0;
 background-color: grey;
`

const ModalContainer =styled.div`

`
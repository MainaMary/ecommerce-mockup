import React, { useState, useContext } from "react";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import { Context } from "../Context";
import Modal from "../components/Modal";

const Cart = () => {
  const { cartItems, emptyCart } = useContext(Context);
  const [order, setOrder] = useState(false);
  const [modal, setModal] = useState(false);

  const totalCost = (cartItems.length * 499).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  console.log(cartItems);
  const handleModal = () => {
    setModal(true);
  };

  const checkOut = () => {
    setOrder(true);
    setTimeout(() => {
      setOrder(false);
      emptyCart();
    }, 3000);
  };
  const handleOrder = () => {
    if (totalCost === "$0.00") {
      return handleModal();
    } else {
      return checkOut();
    }
  };
  return (
    <CartWrapper>
      <h2> Checkout</h2>
      <div>
        {cartItems.map(({ author, id, download_url }, index) => (
          <CartItem key={index} id={id} author={author} url={download_url} />
        ))}
      </div>

      <p>Total: {totalCost}</p>
      <PlaceOrder>
        <button onClick={handleOrder}>
          {order ? "Ordering..." : "Place order"}
        </button>
      </PlaceOrder>
      {modal && <Modal removeModal ={()=>setModal(false)}/>}
    </CartWrapper>
  );
};

export default Cart;

const CartWrapper = styled.div`
  padding: 20px 100px;
  width: 80%;
  margin: 10px auto;
  box-shadow: 0 0 3px #777;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 20px ;
    
  }
  h2 {
    text-align: center;
    font-weight: bold;
  }
  p {
    text-align: right;
  }
  div {
    text-align: center;
  }
`;
const PlaceOrder = styled.div`
button{
    padding: 20px 30px;
    text-align: center;
    font-weight: bold;
    background-color: crimson;
    font-size: 1rem;
    border: none:
    outline: none;
    border-radius: 10px;
}
@media(max-width: 768px){
padding: 10px 12px;
}
`;

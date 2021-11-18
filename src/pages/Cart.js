import React,{useState,useContext} from 'react'
import styled from 'styled-components'
import CartItem from '../components/CartItem';
import { Context } from '../Context';

const Cart = () => {
    const {cartItems, emptyCart} = useContext(Context)
    const [order, setOrder] = useState(false)

    const totalCost = (cartItems.length * 499).toLocaleString("en-US", {style: "currency", currency: "USD"})
    console.log(cartItems)

   const checkOut= () =>{
    setOrder(true) 
    setTimeout(()=>{setOrder(false)
     emptyCart()},5000)
   }
   const handleOrder = () =>{
       if(totalCost === "$0.00"){
           return false
       }else{
           return checkOut()
       }
       
       
      
      
       
   }
    return (
        <CartWrapper>
            <h1> Checkout</h1> 
            <div>
               {cartItems.map(({author, id, download_url},index)=>
               <CartItem key={index} id={id} author={author} url={download_url} />
               )}
            </div>
        
            <p>Total: {totalCost}</p>
            <PlaceOrder>
                <button onClick={handleOrder}>{order ? "Ordering...": "Place order" }</button>
            </PlaceOrder>
        </CartWrapper>
    )
}

export default Cart

const CartWrapper = styled.div`
padding: 20px 100px;
width: 80%;
margin: 10px auto;
box-shadow: 0 0 3px #777;
@media(max-width: 768px){
    width: 100%;
}
h1{
    text-align: center;
    font-weight: bold;
}
p{
    text-align: right;
}
div{
    text-align: center;
}
`
const PlaceOrder = styled.div`
button{
    padding: 20px 30px;
    text-align: center;
    font-weight: bold;
    background-color: red;
    font-size: 1.5rem;
    border: none:
    outline: none;
    border-radius: 10px;
}
`

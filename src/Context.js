import React,{createContext, useEffect, useState}  from "react"
import axios from "axios";
const Context = createContext()

const ContextProvider = (props) =>{
    const [photos, setPhotos] = useState([]);
    const [cartItems, setCartItems]= useState([])
    const [loading, setLoading] = useState(false)
    

    const handleLoading = () =>{
        setLoading(true)
    }

    const emptyCart =() =>{
      setCartItems([])
    }

    useEffect(() => {
      axios({
        method: "get",
        url: "https://picsum.photos/v2/list",
      }).then((response) => {
        setPhotos(response.data);
       
        setLoading(false)
      });
    }, []);

    const addCartItems = (newObj) =>{
    setCartItems(prevState => [...prevState, newObj])
    }

    const removeCartItems = (id) =>{
      const currentCart = cartItems.filter(item => item.id !== id)
      console.log(id)
      console.log(cartItems)
      setCartItems(currentCart)
    }

return(
    <div>
        <Context.Provider value={{data: photos, loading, addCartItems, cartItems, handleLoading, removeCartItems, emptyCart}}>
         {props.children}
        </Context.Provider>
    </div>
)
}
export {ContextProvider, Context}
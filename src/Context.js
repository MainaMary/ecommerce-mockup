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
   
    //get items from local storage
    useEffect(()=>{
      const savedItems = localStorage.getItem('storage-key')? JSON.parse(localStorage.getItem('storage-key')): []
       setCartItems(savedItems)
    },[])

    useEffect(() => {
      axios({
        method: "get",
        url: "https://picsum.photos/v2/list",
      }).then((response) => {
        setPhotos(response.data);
       
        setLoading(false)
      });
    }, []);

    
    const setLocalStorage= (items) =>{
      localStorage.setItem('storage-key', JSON.stringify(items))
    }

    const addCartItems = (newObj) =>{
      const itemsStored= [...cartItems, newObj]
    setCartItems(itemsStored)
    setLocalStorage(itemsStored)
    }

    const removeCartItems = (id) =>{
      const currentCart = cartItems.filter(item => item.id !== id)
      setCartItems(currentCart)
      setLocalStorage(currentCart)
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
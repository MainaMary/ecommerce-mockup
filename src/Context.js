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
console.log(cartItems)
return(
    <div>
        <Context.Provider value={{data: photos, loading, addCartItems, cartItems, handleLoading}}>
         {props.children}
        </Context.Provider>
    </div>
)
}
export {ContextProvider, Context}
import "./App.css";
import React from "react"
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App__cont">
      <Header />
      
      <Routes>
        <Route exact path="/" element={<Photos/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;

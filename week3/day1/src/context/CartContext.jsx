import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    var [count, setCount] = useState(0)
    
    const addToCart = () => {
        setCount(count+1)
    }

    return <CartContext.Provider value={{count,addToCart}}>{children}</CartContext.Provider>
}
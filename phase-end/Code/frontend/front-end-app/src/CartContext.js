import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (medicine, quantity) => {
    const cartItem = {
      medicine,
      quantity,
    };
    setCart((prevCart) => [...prevCart, cartItem]);
  };

  const removeFromCart = (medicine) => {
    console.log("removing", medicine.medname)
    setCart((prevCart) => prevCart.filter((item) => item.medicine.medname !== medicine.medname));
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

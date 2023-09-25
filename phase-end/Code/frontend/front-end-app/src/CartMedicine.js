import React from "react";
import { useCart } from "./CartContext";
import PayMedicine from "./PayMedicine";

function CartMedicine() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span>{item.medicine.medname}</span>
            <span>Quantity: {item.quantity}</span>
            <button onClick={() => removeFromCart(item.medicine)}>Remove</button>
          </li>
        ))}
      </ul>
      <PayMedicine/>
    </div>
  );
}

export default CartMedicine;

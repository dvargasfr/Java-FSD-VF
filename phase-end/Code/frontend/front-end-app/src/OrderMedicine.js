import React, { useState } from "react";

function OrderMedicine({ medicine, onAddToCart }){

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <h3>{medicine.medname}</h3>
            <p>Price: {medicine.medprice}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => onAddToCart(medicine, quantity)}>Add to Cart</button>
        </div>
    );
}

export default OrderMedicine;
import React, { useState } from "react";
import { Pocket } from "react-feather";

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
        <div style={{display:"-webkit-inline-box"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginRight: "20%"}}>
                <div>Quantity: {quantity}</div>
                <div>
                <button onClick={handleIncrement} style={{display:"flex", marginLeft:"10%", justifyContent:"flex-start", textDecoration:"none", background: 'transparent', border: 0}}>
                    <Pocket style={{transform: "rotate(180deg)"}} size="20"/>
                </button>
                <button onClick={handleDecrement} style={{display:"flex", marginLeft:"10%", justifyContent:"flex-start", textDecoration:"none", background: 'transparent', border: 0}}>
                    <Pocket size="20"/>
                </button>
                </div>
                {/*
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
                */}
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
                <button onClick={() => onAddToCart(medicine, quantity)}>Add to Cart</button>
            </div>
            
        </div>
    );
}

export default OrderMedicine;
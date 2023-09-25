import React from "react";

function PayMedicine() {
    const handlePayment = () => {
        console.log("go to pay");
    };

  return (
    <div >
        <button onClick={() => handlePayment()}>Pay</button>
    </div>
  );
}

export default PayMedicine;

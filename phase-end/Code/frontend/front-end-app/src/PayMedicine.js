import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function PayMedicine() {
  const { cart, resetCart } = useCart();
  const totalAmount = cart.reduce((total, item) => total + item.medicine.medprice * item.quantity, 0);

  const handleResetCart = () => {
    resetCart();
  };

  return (
    <div class="row" style={{display:"grid", textAlign:"center"}}>
      <h2>Pay</h2>
      <div style={{alignItems: "center", justifyContent: "center", display: "flex"}}>
      <table class="custom-table" style={{ borderCollapse: "collapse", width: "50%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Seller</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item.medicine.medname}>
              <td>{item.medicine.medname}</td>
              <td>{item.medicine.medseller}</td>
              <td>$ {item.medicine.medprice}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div><br/>
      <div>
        <span style={{fontWeight: "bold"}}>Total:  </span>$ {totalAmount}
      </div><br/>
      <Link to="/customer/paymentDetails">
        <button type="button" onClick={() => handleResetCart()}>Confirm Pay</button>
      </Link>
    </div>
  );
}

export default PayMedicine;
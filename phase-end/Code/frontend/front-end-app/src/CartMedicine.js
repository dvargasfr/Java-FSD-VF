import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { Trash2 } from "react-feather";

function CartMedicine() {
  const { cart, removeFromCart } = useCart();
  const totalAmount = cart.reduce((total, item) => total + item.medicine.medprice * item.quantity, 0);

  const handleRemoveItem = (medicine) => {
    removeFromCart(medicine);
  };

  return (
    <div class="row" style={{display:"grid", textAlign:"center"}}>
      <h2>Your Cart</h2>

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
                    <td>
                      <button style={{background: 'transparent', border: 0}} onClick={() => handleRemoveItem(item.medicine)}><Trash2/></button>
                    </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div><br/>
      <div>
        <span style={{fontWeight: "bold"}}>Total:  </span>$ {totalAmount}
      </div><br/>
      <Link to="/customer/payMedicine">
        <button type="button">Go to Pay</button>
      </Link>
    </div>
  );
}

export default CartMedicine;

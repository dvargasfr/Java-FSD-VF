import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import Admin from './Admin';
import Customer from './Customer';
import AddMedicine from './AddMedicine';
import ViewMedicineAdmin from './ViewMedicineAdmin';
import ViewMedicineCustomer from './ViewMedicineCustomer';
import UpdateMedicine from './UpdateMedicine';
import CartMedicine from './CartMedicine';
import PayMedicine from './PayMedicine';
import PaymentDetails from './PaymentDetails';
import {Route, Routes} from 'react-router-dom';
import { CartProvider } from "./CartContext";

function App() {
  return (
    <div className="App">
      {/*<Login></Login>*/}
      {/*<SignUp></SignUp>*/}
      <CartProvider>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/admin" element={<Admin/>}>
            <Route path="addMedicine" element={<AddMedicine/>}></Route>
            <Route path="viewMedicineAdmin" element={<ViewMedicineAdmin/>}></Route>
            <Route path="updateMedicine" element={<UpdateMedicine/>}></Route>
          </Route>
          <Route path="/customer" element={<Customer/>}>
            <Route path="viewMedicineCustomer" element={<ViewMedicineCustomer/>}></Route>
            <Route path="cartMedicine" element={<CartMedicine/>}></Route>
            <Route path="payMedicine" element={<PayMedicine/>}></Route>
            <Route path="paymentDetails" element={<PaymentDetails/>}></Route>
          </Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;

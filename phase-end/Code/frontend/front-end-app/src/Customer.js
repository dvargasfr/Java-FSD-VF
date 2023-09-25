import { Link, Outlet } from "react-router-dom";
import ViewMedicineCustomer from "./ViewMedicineCustomer";
import CartMedicine from "./CartMedicine";

function Customer(){

    return(
        <div>
            <h2>Welcome to Customer Home Page</h2>
            <Link to="viewMedicineCustomer" state={{ cart: "" }}>View Medicine</Link>
            <Link to="/">Logout</Link>
            <hr/>
            <Outlet></Outlet>
        </div>
    )
}

export default Customer;
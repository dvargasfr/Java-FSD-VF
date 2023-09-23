import { Link,Outlet } from "react-router-dom";

function Admin(){
    return(
        <div>
            <h2>Welcome to Admin Home Page</h2>
            <Link to="addMedicine">Add Medicine</Link> | 
            <Link to="viewMedicineAdmin">View Medicine</Link> |
            <Link to="/">Logout</Link>
            <hr/>
            <Outlet></Outlet>
        </div>
    )
}

export default Admin;
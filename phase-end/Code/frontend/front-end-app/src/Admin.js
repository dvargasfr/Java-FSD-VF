import { Link,Outlet } from "react-router-dom";
import { LogOut } from "react-feather";

function Admin(){
    return(
        <div>
            <h2>Admin Home Page</h2>

            <div class="row" style={{display:"grid", textAlign:"center"}}>
                <div class="row" style={{display:"inline-flex", marginBottom:"1%"}}>
                    <div style={{float:"left", width:"33.33%"}}>
                        <Link to="/" style={{display:"flex", marginLeft:"10%", justifyContent:"flex-start", textDecoration:"none"}}>
                            <div>
                            Logout <LogOut size="15"/>
                            </div>
                        </Link>
                    </div>
                    <div style={{float:"left", width:"33.33%"}}>
                        <Link to="addMedicine" style={{textDecoration:"none"}}>Add Medicine</Link> | 
                        <Link to="viewMedicineAdmin" style={{textDecoration:"none"}}> View Medicine</Link>
                    </div>
                </div>
            </div>
            <hr/>
            <Outlet></Outlet>
        </div>
    )
}

export default Admin;
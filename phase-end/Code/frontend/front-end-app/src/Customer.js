import { Link, Outlet } from "react-router-dom";
import { LogOut } from "react-feather";

function Customer(){

    return(
        <div>
            <h2>Customer Home Page</h2>

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
                        <Link to="viewMedicineCustomer" style={{textDecoration:"none"}}>Medicine Catalog</Link>
                    </div>
                    <div style={{float:"right", width:"33.33%"}}></div>
                </div>
            </div>
            <hr/>
            <Outlet></Outlet>
        </div>
    )
}

export default Customer;
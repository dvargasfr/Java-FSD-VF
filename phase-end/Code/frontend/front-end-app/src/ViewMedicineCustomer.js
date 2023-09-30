import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronsDown, ChevronsUp, ShoppingCart } from "react-feather";
import SearchMedicine from "./SearchMedicine";
import OrderMedicine from "./OrderMedicine";
import { useCart } from "./CartContext";

function ViewMedicineCustomer(){

    let [medicineList, setMedicineList] = useState([]);
    let [sortOrder, setSortOrder] = useState({ field: "name", direction: "asc" });
    let [filteredMedicineList, setFilteredMedicineList] = useState([]);
    const { cart, addToCart } = useCart();

    useEffect(()=> { 
        axios.get("http://localhost:8081/medicine/listMedicine")
        .then(result=> {
            console.log("result: ", result.data);
            setMedicineList(result.data);
            setFilteredMedicineList(result.data);
        })
        .catch(error=> {
            console.log(error);
        });
    },[])

    const handleSortClick = (field) => {
        setSortOrder((prevSortOrder) => {
            if (prevSortOrder.field === field) {
                return { ...prevSortOrder, direction: prevSortOrder.direction === "asc" ? "desc" : "asc" };
            } else {
                return { field, direction: "asc" };
            }
        });
    };

    const handleSearch = (searchTerm) => {
        const filteredList = medicineList.filter((m) =>
            m.medname.toLowerCase().includes(searchTerm.toLowerCase()) || m.medseller.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log("filteredlist: ", filteredList);
        setFilteredMedicineList(filteredList);
    };

    const sortedMedicineList = [...filteredMedicineList]; 

    if (sortOrder.field === "name") {
        sortedMedicineList.sort((a, b) => (sortOrder.direction === "asc" ? a.medname.localeCompare(b.medname) : b.medname.localeCompare(a.medname)));
    } else if (sortOrder.field === "price") {
        sortedMedicineList.sort((a, b) => (sortOrder.direction === "asc" ? a.medprice - b.medprice : b.medprice - a.medprice));
    } else if (sortOrder.field === "seller") {
        sortedMedicineList.sort((a, b) => (sortOrder.direction === "asc" ? a.medseller.localeCompare(b.medseller) : b.medseller.localeCompare(a.medseller)));
    }

    return(
        <div class="row" style={{display:"grid", textAlign:"center"}}>
            <div class="row" style={{display:"inline-flex", marginBottom:"1%"}}>
                <div style={{float:"left", width:"33.33%"}}></div>
                <div style={{float:"left", width:"33.33%"}}>
                    <SearchMedicine onSearch={handleSearch} />
                </div>
                <div style={{float:"right", width:"33.33%"}}>
                        <Link to="/customer/cartMedicine" style={{display:"flex", marginRight:"10%", justifyContent:"flex-end", textDecoration:"none"}}>
                            <ShoppingCart style={{marginRight:"3px"}}/> <br/>
                            {cart.length >= 0 && <span> { cart.length } </span>}  <span style={{marginLeft:"3px"}}> items</span>
                        </Link>
                </div>
            </div>
            <div style={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                <table class="custom-table" style={{ borderCollapse: "collapse", width: "95%" }}>
                    <thead>
                        <tr>
                            <th>Name{" "}
                                <span className="cursor-pointer" onClick={() => handleSortClick("name")}>
                                    {sortOrder.field === "name" && sortOrder.direction === "asc" ? <ChevronsDown /> : <ChevronsUp />}
                                </span>
                            </th>
                            <th>Price{" "}
                                <span className="cursor-pointer" onClick={() => handleSortClick("price")}>
                                    {sortOrder.field === "price" && sortOrder.direction === "asc" ? <ChevronsDown /> : <ChevronsUp />}
                                </span>
                            </th>
                            <th>Seller{" "}
                                <span className="cursor-pointer" onClick={() => handleSortClick("seller")}>
                                    {sortOrder.field === "seller" && sortOrder.direction === "asc" ? <ChevronsDown /> : <ChevronsUp />}
                                </span>
                            </th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedMedicineList.map(m => (
                            <tr key={m.medname}>
                                <td>{m.medname}</td>
                                <td>$ {m.medprice}</td>
                                <td>{m.medseller}</td>
                                <td>{m.meddescription}</td>
                                <td>
                                    <OrderMedicine medicine={m} onAddToCart={addToCart} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewMedicineCustomer;
import axios from "axios";
import { useEffect, useState } from "react";
import { Link,Outlet } from "react-router-dom";
import DeleteMedicine from "./DeleteMedicine";
import UpdateMedicine from "./UpdateMedicine";
import { ArrowUp, ArrowDown } from "react-feather";

function ViewMedicine(){

    const [sortOrder, setSortOrder] = useState("asc");
    let [medicineList,setMedicineList] = useState([]);

    useEffect(()=> { 
        axios.get("http://localhost:8081/medicine/listMedicine")
        .then(result=> {
            console.log("result: ", result.data);
            setMedicineList(result.data);
        })
        .catch(error=> {
            console.log(error);
        });
    },[])
 
    const updateMedicineList = async () => {
        try {
            const result = await axios.get("http://localhost:8081/medicine/listMedicine");
            setMedicineList(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSortClick = (field) => {
        if (sortOrder.field === field) {
            setSortOrder({field, direction: sortOrder.direction === "asc" ? "desc" : "asc"});
        } else {
            setSortOrder({field, direction: "asc"});
        }
    };

    const sortedMedicineList = [...medicineList]; 

    if (sortOrder.field === "name") {
        sortedMedicineList.sort((a, b) => (sortOrder.direction === "asc" ? a.medname.localeCompare(b.medname) : b.medname.localeCompare(a.medname)));
    } else if (sortOrder.field === "price") {
        sortedMedicineList.sort((a, b) => (sortOrder.direction === "asc" ? a.medprice - b.medprice : b.medprice - a.medprice));
    } else if (sortOrder.field === "seller") {
        sortedMedicineList.sort((a, b) => (sortOrder.direction === "asc" ? a.medseller.localeCompare(b.medseller) : b.medseller.localeCompare(a.medseller)));
    }

    return(
        <div>
            <h2>View Medicine</h2>
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Name{" "}
                            <span className="cursor-pointer" onClick={() => handleSortClick("name")}>
                                {sortOrder.field === "name" && sortOrder.direction === "asc" ? <ArrowDown /> : <ArrowUp />}
                            </span>
                        </th>
                        <th>Price{" "}
                            <span className="cursor-pointer" onClick={() => handleSortClick("price")}>
                                {sortOrder.field === "price" && sortOrder.direction === "asc" ? <ArrowDown /> : <ArrowUp />}
                            </span>
                        </th>
                        <th>Seller{" "}
                            <span className="cursor-pointer" onClick={() => handleSortClick("seller")}>
                                {sortOrder.field === "seller" && sortOrder.direction === "asc" ? <ArrowDown /> : <ArrowUp />}
                            </span>
                        </th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedMedicineList.map(m => (
                        <tr key={m.medname}>
                            <td>{m.medname}</td>
                            <td>{m.medprice}</td>
                            <td>{m.medseller}</td>
                            <td>{m.meddescription}</td>
                            <td>
                                <div style={{display: "inline-flex"}}>
                                    <Link to="/admin/updateMedicine" state={{ medicineData: m }}>
                                        <button type="button">Update</button>
                                    </Link>
                                    <DeleteMedicine medname={m.medname} updateMedicineList={updateMedicineList}/>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ViewMedicine;
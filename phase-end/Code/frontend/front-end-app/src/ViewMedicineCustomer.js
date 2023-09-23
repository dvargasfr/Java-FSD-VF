import axios from "axios";
import { useEffect, useState } from "react";
import { ChevronsDown, ChevronsUp, ArrowDown, ArrowUp, ArrowDownCircle, ArrowUpCircle } from "react-feather";
import SearchMedicine from "./SearchMedicine";

function ViewMedicineCustomer(){

    let [medicineList,setMedicineList] = useState([]);
    let [sortOrder, setSortOrder] = useState("asc");
    let [filteredMedicineList, setFilteredMedicineList] = useState([]);

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
 
    let updateMedicineList = async () => {
        try {
            const result = await axios.get("http://localhost:8081/medicine/listMedicine");
            setMedicineList(result.data);
            setFilteredMedicineList(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSortClick = (field) => {
        /*const sortedList = [...medicineList]; */
        const sortedList = [...filteredMedicineList];

        if (field === "name") {
            sortedList.sort((a, b) => (sortOrder.direction === "asc" ? a.medname.localeCompare(b.medname) : b.medname.localeCompare(a.medname)));
        } else if (field === "price") {
            sortedList.sort((a, b) => (sortOrder.direction === "asc" ? a.medprice - b.medprice : b.medprice - a.medprice));
        } else if (field === "seller") {
            sortedList.sort((a, b) => (sortOrder.direction === "asc" ? a.medseller.localeCompare(b.medseller) : b.medseller.localeCompare(a.medseller)));
        }

        setFilteredMedicineList(sortedList);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const handleSearch = (searchTerm) => {
        /*setSearchTerm(searchTerm);*/
        const filteredList = medicineList.filter((m) =>
            m.medname.toLowerCase().includes(searchTerm.toLowerCase()) || m.medseller.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log("filteredlist: ", filteredList);
        setFilteredMedicineList(filteredList);
    };

    return(
        <div>
            <h2>View Medicine</h2>
            <SearchMedicine onSearch={handleSearch} />
            <table className="custom-table">
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
                    {filteredMedicineList.map(m => (
                        <tr key={m.medname}>
                            <td>{m.medname}</td>
                            <td>{m.medprice}</td>
                            <td>{m.medseller}</td>
                            <td>{m.meddescription}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ViewMedicineCustomer;
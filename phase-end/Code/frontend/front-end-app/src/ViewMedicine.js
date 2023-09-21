import axios from "axios";
import { useEffect, useState } from "react";
import MedicineData from "./MedicineData";

function ViewMedicine(){
    let [medicineList,setMedicineList] = useState([]);

    useEffect(()=> { 
        axios.get("http://localhost:8081/medicine/listMedicine").
        then(result=> {
            console.log("result: ", result.data);
            setMedicineList(result.data);
        }).
        catch(error=> {
            console.log(error);
        });
    },[])
 
    let medicineItem = medicineList.map(m => 
        <div id={m.medname} key={m.medname}>
            <MedicineData meddata={m}></MedicineData>
        </div>
    )

    return(
        <div>
            <h2>View Medicine</h2>
            <div>
                {medicineItem}
            </div>
        </div>
    )
}

export default ViewMedicine;
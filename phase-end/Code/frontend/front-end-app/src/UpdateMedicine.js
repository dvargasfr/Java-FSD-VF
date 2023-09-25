import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateMedicine(props, { medicine, onSave }) {

    const location = useLocation();
    const { medicineData } = location.state;
    let navigate = useNavigate();
    let [medname, setMedname] = useState(medicineData.medname);
    let [medprice, setMedprice] = useState(medicineData.medprice);
    let [medseller, setMedseller] = useState(medicineData.medseller);
    let [meddescription, setMeddescription] = useState(medicineData.meddescription);

    let updateMedicine = async(event)=>{
        event.preventDefault();
        let updatedMedicine = {"medname": medname, "medprice": medprice, "medseller": medseller, "meddescription": meddescription};
        try{
            let result = await axios.post("http://localhost:8081/medicine/updateMedicine",updatedMedicine);
            console.log(updatedMedicine);
            alert(updatedMedicine);
            navigate("/admin/viewMedicineAdmin");
        }catch(ex){
            console.log(ex);
        }
    }

    return (
        <div>
            <h2>Update Medicine - {medicineData.medname}</h2>
            <form onSubmit={updateMedicine}>
                <label>Medicine Price:</label>
                <input type="number" name="medprice" defaultValue={medicineData.medprice} onChange={e=>setMedprice(e.target.value)}/><br/>
                <label>Medicine Seller:</label>
                <input type="text" name="medseller" defaultValue={medicineData.medseller} onChange={e=>setMedseller(e.target.value)}/><br/>
                <label>Medicine Description:</label>
                <input type="text" name="meddescription" defaultValue={medicineData.meddescription} onChange={e=>setMeddescription(e.target.value)}/><br/>
                
                <input type="submit" value="submit"/>
                <Link to="/admin/viewMedicineAdmin">Back to Admin view</Link>
            </form>
        </div>
  );
}

export default UpdateMedicine;

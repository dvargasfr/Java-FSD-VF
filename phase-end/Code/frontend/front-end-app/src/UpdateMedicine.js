import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateMedicine(props, { medicine, onSave }) {

    const location = useLocation();
    const { medicineData } = location.state;
    let navigate = useNavigate();
    let [medname] = useState(medicineData.medname);
    let [medprice, setMedprice] = useState(medicineData.medprice);
    let [medseller, setMedseller] = useState(medicineData.medseller);
    let [meddescription, setMeddescription] = useState(medicineData.meddescription);

    let updateMedicine = async(event)=>{
        event.preventDefault();
        let updatedMedicine = {"medname": medname, "medprice": medprice, "medseller": medseller, "meddescription": meddescription};
        try{
            await axios.post("http://localhost:8081/medicine/updateMedicine",updatedMedicine);
            console.log(updatedMedicine);
            alert(updatedMedicine);
            navigate("/admin/viewMedicineAdmin");
        }catch(ex){
            console.log(ex);
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <h2>Update Medicine - {medicineData.medname}</h2>
            <form onSubmit={updateMedicine}>
                <div class="row" style={{display:"grid", textAlign:"center"}}>
                    <div class="row" style={{display:"inline-flex", marginBottom:"1%"}}>
                        <div style={{float:"left", width:"50%"}}>
                            <label>Price:</label>
                        </div>
                    
                        <div style={{float:"right", width:"50%"}}>
                            <input type="number" name="medprice" defaultValue={medicineData.medprice} onChange={e=>setMedprice(e.target.value)}/><br/>
                        </div>
                    </div>
                    <div class="row" style={{display:"inline-flex", marginBottom:"1%"}}>
                        <div style={{float:"left", width:"50%"}}>
                            <label>Seller:</label>
                        </div>
                        <div style={{float:"right", width:"50%"}}>
                            <input type="text" name="medseller" defaultValue={medicineData.medseller} onChange={e=>setMedseller(e.target.value)}/><br/>
                        </div>
                    </div>
                    <div class="row" style={{display:"inline-flex", marginBottom:"1%"}}>
                        <div style={{float:"left", width:"50%"}}>
                            <label>Description:</label>
                        </div>
                        <div style={{float:"right", width:"50%"}}>
                            <input type="text" name="meddescription" defaultValue={medicineData.meddescription} onChange={e=>setMeddescription(e.target.value)}/><br/>
                        </div>
                    </div>
                </div>

                <br/>
                <input type="submit" value="Update"/>
            </form>
        </div>
  );
}

export default UpdateMedicine;

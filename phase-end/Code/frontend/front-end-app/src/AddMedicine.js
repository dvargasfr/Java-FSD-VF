import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddMedicine(){

    let navigate = useNavigate();
    let [medname, setMedname] = useState("");
    let [medprice, setMedprice] = useState("");
    let [medseller, setMedseller] = useState("");
    let [meddescription, setMeddescription] = useState("");

    let addMedicine = async(event)=>{
        event.preventDefault();
        let newmedicine = {"medname": medname, "medprice": medprice, "medseller": medseller, "meddescription": meddescription};
        try{
            let result = await axios.post("http://localhost:8081/medicine/addMedicine",newmedicine);
            console.log(result.data);
            alert(result.data);
            navigate("/admin/viewMedicineAdmin");
        }catch(ex){
            console.log(ex);
        }
    }

    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <h2>Add Medicine</h2>

            <form onSubmit={addMedicine}>
                <div class="row" style={{display:"grid", textAlign:"center"}}>
                    <div class="row" style={{display:"inline-flex", marginBottom:"1%"}}>
                            <div style={{float:"left", width:"50%"}}>
                                <label>Name:</label>
                            </div>
                        
                            <div style={{float:"right", width:"50%"}}>
                            <input type="text" name="medname" onChange={e=>setMedname(e.target.value)}/><br/>
                            </div>
                        </div>
                    <div class="row" style={{display:"inline-flex", marginBottom:"1%"}}>
                        <div style={{float:"left", width:"50%"}}>
                            <label>Price:</label>
                        </div>
                    
                        <div style={{float:"right", width:"50%"}}>
                        <input type="number" step="any" min="0" name="medprice" onChange={e=>setMedprice(e.target.value)}/><br/>
                        </div>
                    </div>
                    <div class="row" style={{display:"inline-flex", marginBottom:"1%"}}>
                        <div style={{float:"left", width:"50%"}}>
                            <label>Seller:</label>
                        </div>
                        <div style={{float:"right", width:"50%"}}>
                            <input type="text" name="medseller" onChange={e=>setMedseller(e.target.value)}/><br/>
                        </div>
                    </div>
                    <div class="row" style={{display:"inline-flex", marginBottom:"1%"}}>
                        <div style={{float:"left", width:"50%"}}>
                            <label>Description:</label>
                        </div>
                        <div style={{float:"right", width:"50%"}}>
                            <input type="text" name="meddescription" onChange={e=>setMeddescription(e.target.value)}/><br/>
                        </div>
                    </div>
                </div>

                <br/>
                <input type="submit" value="Add" style={{marginRight:"10%"}}/>
                <input type="reset" value="Reset"/>
            </form>
        </div>
    )
}

export default AddMedicine;
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddMedicine(){

    let [medname, setMedname] = useState("");
    let [medprice, setMedprice] = useState("");
    let [medseller, setMedseller] = useState("");
    let [meddescription, setMeddescription] = useState("");

    let addMedicine = async(event)=>{
        event.preventDefault();
        /*console.log(emailid+" "+password+" "+typeofuser);*/
        /*let login = {"emailid": emailid, "password": password, "typeofuser": typeofuser};*/
        let newmedicine = {"medname": medname, "medprice": medprice, "medseller": medseller, "meddescription": meddescription};
        try{
            /*let result = await axios.post("http://localhost:8081/login/signIn",login);*/
            let result = await axios.post("http://localhost:8081/medicine/addMedicine",newmedicine);
            console.log(result.data);
 
            alert(result.data);
        }catch(ex){
            console.log(ex);
        }
    }

    let deleteMedicine = async(event)=>{
        event.preventDefault();
        let newmedicine = {"medname": medname, "medprice": medprice, "medseller": medseller, "meddescription": meddescription};
        try{
            let result = await axios.post("http://localhost:8081/medicine/deleteMedicine",newmedicine);
            alert(result.data);
        }catch(ex){
            console.log(ex);
        }
    }

    return(
        <div>
            <h2>Add Medicine</h2>

            <form onSubmit={addMedicine}>
                <label>Name</label>
                <input type="text" name="medname" onChange={e=>setMedname(e.target.value)}/><br/>
                <label>Price</label>
                <input type="number" step="any" min="0" name="medprice" onChange={e=>setMedprice(e.target.value)}/><br/>
                <label>Seller</label>
                <input type="text" name="medseller" onChange={e=>setMedseller(e.target.value)}/><br/>
                <label>Description</label>
                <input type="text" name="meddescription" onChange={e=>setMeddescription(e.target.value)}/><br/>
                <input type="submit" value="submit"/>
                <input type="reset" value="reset"/><br/>
                <Link to="/admin/addMedicine">Back to Home</Link>
            </form>

            <form onSubmit={deleteMedicine}>
                <label>Name</label>
                <input type="text" name="medname" onChange={e=>setMedname(e.target.value)}/><br/>
                <input type="submit" value="submit"/>
                <input type="reset" value="reset"/><br/>
            </form>
        </div>
    )
}

export default AddMedicine;
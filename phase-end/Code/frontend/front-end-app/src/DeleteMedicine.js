import axios from "axios";

function DeleteMedicine(props){

    let deleteMedicine = async(event, medname)=>{
        event.preventDefault();
        let meddelete = {"medname": medname, "medprice": "", "medseller": "", "meddescription": ""};
        try{
            let result = await axios.post("http://localhost:8081/medicine/deleteMedicine",meddelete);
            alert(result.data);
        }catch(ex){
            console.log(ex);
        }
    }

    return(
        <div>
            <input type="button" value="Delete" onClick={(event)=>deleteMedicine(event, props.medname)}></input>
        </div>
    )
}

export default DeleteMedicine;
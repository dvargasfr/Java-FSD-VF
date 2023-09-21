function MedicineData(props){

    return(
        <div>
            <h4>{props.meddata.medname}</h4>
            <span>Price: {props.meddata.medprice}</span><br/>
            <span>Seller: {props.meddata.medseller}</span><br/>
            <span>Description: {props.meddata.meddescription}</span><br/>
        </div>
    )
}

export default MedicineData;
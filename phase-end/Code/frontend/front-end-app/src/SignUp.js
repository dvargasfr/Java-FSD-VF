import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp(){

    let [emailid, setEmailId] = useState("");
    let [password, setPassword] = useState("");
    let [typeofuser, setTypeOfUser] = useState("");

    let signIn=async(event)=>{
        event.preventDefault();
        console.log(emailid+" "+password+" "+typeofuser);
        let login = {"emailid": emailid, "password": password, "typeofuser": typeofuser};
        try{
            let result = await axios.post("http://localhost:8081/login/signUp",login);
            console.log(result.data);
        }catch(ex){
            console.log(ex);
        }
    }
    return(
        <div>
            <div>Account Create</div>
            <form onSubmit={signIn}>
                <label>email ID</label>
                <input type="email" name="emailid" onChange={e=>setEmailId(e.target.value)}/><br/>
                <label>Password</label>
                <input type="password" name="password" onChange={e=>setPassword(e.target.value)}/><br/>
                <label>Type of User</label>
                <input type="radio" name="typeofuser" value="admin" onChange={e=>setTypeOfUser(e.target.value)}/>Admin
                <input type="radio" name="typeofuser" value="customer" onChange={e=>setTypeOfUser(e.target.value)}/>Customer
                <input type="submit" value="submit"/>
                <input type="reset" value="reset"/><br/>
                <Link to="/">Login</Link>
            </form>
        </div>
    )
}
export default SignUp;
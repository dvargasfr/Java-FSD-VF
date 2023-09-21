import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login(){

    let [emailid, setEmailId] = useState("");
    let [password, setPassword] = useState("");
    let [typeofuser, setTypeOfUser] = useState("");
    let navigate = useNavigate();

    let signIn=async(event)=>{
        event.preventDefault();
        console.log(emailid+" "+password+" "+typeofuser);
        let login = {"emailid": emailid, "password": password, "typeofuser": typeofuser};
        try{
            let result = await axios.post("http://localhost:8081/login/signIn",login);
            console.log(result.data);
            if(result.data=="Admin success"){
                navigate("/admin");
            }else if(result.data=="Customer success"){
                navigate("/customer");
            }else{
                alert(result.data);
            }
        }catch(ex){
            console.log(ex);
        }
    }
    return(
        <div>
            <div>Login Page</div>
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
                <Link to="signup">SignUp</Link>
            </form>
        </div>
    )
}
export default Login;
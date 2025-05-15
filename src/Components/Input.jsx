import "./Input.css";
import {useState} from "react"




function Input({click}){

     
    const [value,setValue]=useState({
        email:"",
        password:""
    })
    
    const [edit,setEdit]=useState({
        email:false,
        password:false
    })
    const emailIsInvalid= edit.email && !value.email.includes("@");
    const passwordIsInvalid=edit.password && value.password!=="hello";
    function handleChange(type,value){
        setValue((prev)=>{
            return{
                ...prev,
                [type]:value
            }
        })
        setEdit((prev)=>{
            return{
                ...prev,
                [type]:false
            }
        })
    }
    function handleBlur(type){
        setEdit((prev)=>{
            return{
                ...prev,
                [type]:true
            }
        })
    }
    return(
        <form>
             <div id="email" className="enter">
            <label htmlFor="email">Email</label><br></br>
            <input type="email" id="email" value={value.email} onBlur={()=>handleBlur("email")} onChange={(e)=>handleChange("email",e.target.value)}/><br></br>
            {emailIsInvalid &&  <p>enter a valid value for email</p>}
            </div>
            <div id="password" className="enter">
            <label htmlFor="password">Password</label><br></br>
            <input type="password" id="password" value={value.password} onBlur={()=>handleBlur("password")}  onChange={(e)=>handleChange("password",e.target.value)}/><br></br>
            {passwordIsInvalid && <p>incorrect password</p>}
            </div>
            <div id="button" className="enter">
            <button type="button" disabled={ value.email=="" || value.password=="" || emailIsInvalid || passwordIsInvalid} onClick={click}>Log in</button>
        </div>
        </form>
    )
}

export default Input;
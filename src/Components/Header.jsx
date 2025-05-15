import "./Header.css"
import image from "../assets/image.png";


import UserName from "./UserName.jsx";
import Input from "./Input";
import {useState} from "react";
function Header (){
    const [signUp , setSignUp]=useState(false);
    function handleClick(){
        setSignUp(true);
    }
    return(
        <>
       { !signUp && (<div id="header">
        <section id="heading">
        <h1>Fitness</h1>
        </section>
        <section id="img-form">
        <div id="left" className="left-right">
            <div id="form">
            <Input click={handleClick}/>
            </div>
        </div>
        <div id="right" className="left-right">
            <img src={image} width="500px" height="400px"/>
        </div>
        </section>
        </div>)
    }
    {signUp && <UserName />}
    </>
    );
}

export default Header;
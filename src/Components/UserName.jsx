import "./UserName.css";
import {useState,useRef} from "react";



import Timer from "./Timer.jsx";
function UserName(){
    const [value,setValue]=useState("")
    const  player=useRef();
    function handleClick(){
        setValue(player.current.value);
        player.current.value="";
    }
    return(
        <>
        <div id="main">
            <h2 id="welcome">Welcome {value ? value : "player"}</h2>
            <input type="text" id="name" ref={player}></input>
            <button type="button" id="setname" onClick={handleClick}>Set Name</button>
        </div>
        <div id="divs">
        <Timer exercise="PUSHUPS" time={5} number={20}/>
        <Timer exercise="SQUAT" time={5} number={25}/>
        <Timer exercise="SIT-UPS" time={10} number={20}/>
        <Timer exercise="STRETCHING" time={2} number={20}/>
        <Timer exercise="HIGH KNEES" time={5} number={20}/>
        <Timer exercise="PULL-UPS" time={5} number={15}/>
        <Timer exercise="KNEE TOUCH" time={10} number={25}/>
        <Timer exercise="STEP JACKS" time={4} number={20}/>
        </div>
        </>
    )
}

export default UserName;
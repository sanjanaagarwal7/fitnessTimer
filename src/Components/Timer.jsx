import "./Timer.css"
import {useState,useRef} from "react";



import Result from "./Result";
function Timer({exercise,time,number}){
    const dialog=useRef();
    const [remainingTime,setRemainingTime]=useState(time*60*1000);
    let timer=useRef();
    const timerActive = remainingTime<time*60*1000 && remainingTime>0
    if(remainingTime<=0){
        clearInterval(timer.current);
        dialog.current.showModal();
    }
    function handleStart(){
        timer.current=setInterval(()=>{
            setRemainingTime((prev)=>prev-10)
        },10)
    }
    function handleStop(){
        clearInterval(timer.current);
        dialog.current.showModal();
    }
    function handleReset(){
        setRemainingTime(time*60*1000)
    }
    function handleWin(){
        setRemainingTime(0);
    }
    return(
        <>
        <Result  ref={dialog} reset={handleReset} win={handleWin} result={remainingTime}/>
        <div id="timer">
            <h4>{exercise}</h4>
            <p id="para">Time:{time} mins <br></br>Number:{number}</p>
            <progress value={remainingTime} max={time*60*1000}></progress>
            <button disabled={remainingTime<=0} id="start" onClick={!timerActive? handleStart : handleStop}>{!timerActive ? "Start" : "Stop"}</button><br></br>
            {timerActive ? "timer running...." : "timer inactive"}
        </div>
        </>
    )
}

export default Timer;
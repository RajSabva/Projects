import React,{useState} from "react";
import "../Counter.css"

function Counter(){
    let count = 0;
    const [currentstate, updatestate] = useState(count)
    const handleClick = () =>{
        updatestate(currentstate + 1)
    }


    return(
        <div class="main Counter">
        <>
        <h1>Counter</h1>
        <button onClick ={handleClick}>{currentstate}</button>
        </>
        </div>
    )
}
export default Counter;
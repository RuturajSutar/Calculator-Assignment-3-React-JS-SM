import { evaluate } from "mathjs";
import React, { useState } from "react";
import "./MainCalculator.css";

const MainCalculator = (props) => {
    const [exp , setExp] = useState("")
    
    const ButtonClicked = (event) =>{
        const myans = evaluate(exp)
        event.preventDefault()
        const myObj = {
            expression : exp,
            answer : myans
        }
        window.alert("Answer of Expression " + exp + " is : " +myans)
        console.log("In MainCalculator.js")
        console.log(myObj)
        props.getData(myObj)
        setExp("")
    }
    return (
        <div className = "center">
            <div className = "inner1">
                <form onSubmit = {ButtonClicked}>
                    <div className = "y">
                        <label>Add Expression : </label>
                        <input value = {exp} id = "text" type = "text" onChange = {(e) => {setExp(e.target.value)}}></input>
                    </div>
                    <div className = "z">
                        <button type = "submit">Calculate</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MainCalculator;
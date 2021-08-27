import React, { useState } from "react";
import "./MainCalculator.css";

const MainCalculator = (props) => {
    const [exp , setExp] = useState("")
    const [ans , setAns] = useState("")
    const ButtonClicked = (event) =>{
        event.preventDefault()
        let myans = eval(exp)
        setAns(myans)
        const myObj = {
            expression : exp,
            answer : ans
        }
        console.log("In MainCalculator.js")
        console.log(myObj)
        props.getData(myObj)
    }
    return (
        <div className = "center">
            <div className = "inner1">
                <form onSubmit = {ButtonClicked}>
                    <div className = "y">
                        <label>Add Expression : </label>
                        <input id = "text" type = "text" onChange = {(e) => {setExp(e.target.value)}}></input>
                    </div>
                    <div className = "z">
                        <button type = "submit">Calculate</button>
                    </div>

                    <div className = "x">
                        <h3 id = "one">Result :  </h3>
                        <h3 id = "two">{ans}</h3>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MainCalculator;
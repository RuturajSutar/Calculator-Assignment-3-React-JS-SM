import React, { useState } from "react";
import ExpressionItemList from "./ExpressionItemList";
import "./ShowHide.css"

const ShowHide = (props) => {
    const [isshow , setIsShow] = useState(false)
    const [buttontext , setButtonText] = useState("Show History")
    let myLen = props.array.length
    if(myLen > 10){
        myLen = myLen - 10
    }
    const myList = props.array.filter(obj => obj.id > myLen)
    const MyButtonClicked = () => { 
        if(isshow === false){
            setIsShow(true)
            setButtonText("Hide History")
        }
        else{
            setIsShow(false)
            setButtonText("Show History")
        }
    }
    return (
        <div className = "center2">
            <div className = "one">
                <button id = "p" onClick = {MyButtonClicked}>{buttontext}</button>
            </div>
            <br></br>
            {props.array.length <= 10 && isshow && props.array.map(item => <ExpressionItemList key = {item.id} expression = {item.expression} answer = {item.answer}></ExpressionItemList>)}
            {props.array.length > 10 && isshow && myList.map(item => <ExpressionItemList key = {item.id} expression = {item.expression} answer = {item.answer}></ExpressionItemList>)}
        </div>
    )
}

export default ShowHide;
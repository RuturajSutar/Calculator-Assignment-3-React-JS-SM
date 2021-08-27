import React from "react";
import "./ExpressionItemList.css";

const ExpressionItemList = (props) => {
    return(
        <div className = "listItem">
            <h4 id = "r">Expression : {props.expression}</h4>
            <h4 id = "s">Answer : {props.answer}</h4>
        </div>
    );
}

export default ExpressionItemList;
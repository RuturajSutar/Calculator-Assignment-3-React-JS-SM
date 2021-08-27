import React from "react";
import ExpressionItemList from "./ExpressionItemList";
import "./ShowHide.css"

const ShowHide = () => {
    return (
        <div className = "center2">
            <div className = "one">
                <button id = "p">Show History</button>
            </div>
            <br></br>
            <ExpressionItemList></ExpressionItemList>
        </div>
    );
}

export default ShowHide;
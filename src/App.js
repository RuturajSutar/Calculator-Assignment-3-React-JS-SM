import { useState } from "react";
import MainCalculator from "./Components/MainCalculator";
import ShowHide from "./Components/ShowHide";


function App() {
  const [myArray , setArray] = useState([])

  const recieveData = (myData) => {
    const newData = {...myData , id : Math.random().toString()};
    console.log("In App.js");
    console.log(newData);
    setArray((prevState) => {
      return [newData , ...prevState];
    })
  }
  return (
    <div>
      <br/>
      <MainCalculator getData = {recieveData}></MainCalculator>
      <br/>
      <ShowHide></ShowHide>
    </div>
  );
}

export default App;

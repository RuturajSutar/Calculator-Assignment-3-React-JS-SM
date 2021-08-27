import { useState } from "react";
import MainCalculator from "./Components/MainCalculator";
import ShowHide from "./Components/ShowHide";

function App() {
  const [myArray , setArray] = useState([])
  const [id , setID] = useState(1)

  const recieveData = (myData) => {
    const newData = {...myData , id : id};
    setID(id+1)
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
      <ShowHide array = {myArray}></ShowHide>
    </div>
  );
}

export default App;

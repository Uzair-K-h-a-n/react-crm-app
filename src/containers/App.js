import './App.css';
import React, {useState} from 'react'
import Persons from '../components/Persons/Persons'
import Registration from '../components/Agents/Registration/Registration'
import { BrowserRouter } from "react-router-dom";
 
function App() {

  const [personState, setPersonState] = useState({
    persons: [
        {id: 1, name: 'Max', age: 28},
        {id: 2, name: 'Manu', age: 34},
        {id: 3, name: 'Kami', age: 25}
        ],
        otherState: "This is another state"
  });
  //Create as many states as you want
  // const [otherState, setOtherState] = useState("This is other state");

  const switchNameHandler = () => {
      setPersonState({
            persons: [
              {id: 1, name: 'Uzair Khan', age: 28},
              {id: 2, name: 'Kami', age: 34},
              {id: 3, name: 'Max', age: 27}
              ],
              otherState: personState.otherState
          });  
    }

    let deletePersonHandler = () => {
      alert("clicked");
    }

    let changeNameHandler = () => {
      alert("Name Change");

    }

  return (
    <div className="App">
      <Registration></Registration>
     {/* <h1>This is my first REACT app</h1>
     <Persons
     persons={personState.persons}
     clicked={deletePersonHandler}
     changed={changeNameHandler}
     />
     <button onClick={switchNameHandler}>Button Text</button> */}
    </div>
  );
}

export default App;

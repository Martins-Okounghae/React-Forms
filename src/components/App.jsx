import React, { useState } from "react";
import { isFunctionDeclaration } from "typescript";

function App() {
  const [name, setName] = useState("");
  const [headerText, setheaderText]= useState("");

  function handleChange(event){
     setName(event.target.value)
   
  }

  function handleClick(event){
    setheaderText(name)
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello  {headerText}</h1>
      <form onSubmit={handleClick}> 
      <input 
      onChange={handleChange} 
      type="text" 
      placeholder="What's your name?"
      value= {name}
       />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

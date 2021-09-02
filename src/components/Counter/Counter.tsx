import React from "react";
import { useState } from "react";

const Counter = ()  => {
  const[counter, setCounter] = useState(0);

  const atrib = () =>{
    setCounter(counter+1)
  }
return(
  <div className="counter">
   <p>Contador: {counter}</p>
   <button type="button" onClick={atrib}>Incrementar</button>
  </div>
);
}

export default Counter;

import React , { useState } from "react";
import "./shapeShifter.css";


const ShapeShifter = () => {



const [choice,setChoice]=useState(4);
 
return(
<div>
<div className="choiceContainer ">
      
      <input type="text"
      onChange={(e) => setChoice(Number(e.target.value))}
      placeholder='enter your choice...'
      id='choiceInput'
      value={choice}
      />
     <div className='flex'>
      <div className={`square ${choice == 1 && "round"}`}></div>
      <div className={`square ${choice == 2 && "round"}`}></div>
      <div className={`square ${choice == 3 && "round"}`}></div>
      <div className={`square ${choice == 4 && "round"}`}></div>
      <div className={`square ${choice == 5 && "round"}`}></div>
      <div className={`square ${choice == 6 && "round"}`}></div>



     </div>
  
    </div>
    
</div>
  
 
  )
}

export default ShapeShifter;
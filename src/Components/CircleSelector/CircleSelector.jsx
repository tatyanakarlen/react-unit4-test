import React from 'react'
import './CircleSelector.css'

const CircleSelector = ({ circleNumber, setCircleNumber }) => {
  return (
    
       <div className="CircleSelector">
        <button
          className={circleNumber === 1 ? "selected" : ""}
          onClick={() => setCircleNumber(1)}
        >
          {circleNumber === 1 ? "CIRCLE 1 SELECTED" : "SELECT CIRCLE 1"}
        </button>
        <button
          className={circleNumber === 2 ? "selected" : ""}
          onClick={() => setCircleNumber(2)}
        >
          {circleNumber === 2 ? "CIRCLE 2 SELECTED" : "SELECT CIRCLE 2"}
        </button>
        <button
          className={circleNumber === 3 ? "selected" : ""}
          onClick={() => setCircleNumber(3)}
        >
         {circleNumber === 3 ? "CIRCLE 3 SELECTED" : "SELECT CIRCLE 3"}
        </button>
        <button
          className={circleNumber === 4 ? "selected" : ""}
          onClick={() => setCircleNumber(4)}
        >
          {circleNumber === 4 ? "CIRCLE 4 SELECTED" : "SELECT CIRCLE 4"}
        </button>
      </div>
   
  )
}

export default CircleSelector

import './Circles.css'

import React from 'react'

const Circles = ({ circleNumber }) => {
  return (
    <div className="Circles">
       <div className={circleNumber === 1 ? "selected" : ""}>1</div>
      <div className={circleNumber === 2 ? "selected" : ""}>2</div>
      <div className={circleNumber === 3 ? "selected" : ""}>3</div>
      <div className={circleNumber === 4 ? "selected" : ""}>4</div>
    </div>
  )
}

export default Circles

import React from 'react'

type circleProps={
    color:string
}
function Circles({color}:circleProps) {
  return (
    
      <div className="w-40 h-40 bg-[${color}] rounded-full shadow-lg blur-2xl"></div>
    
  )
}

export default Circles


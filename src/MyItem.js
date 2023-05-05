import React, { useState } from 'react'


const MyItem = (props) => {
  const [count, setCount] = useState(0)
  const [remaining, setRemaining] = useState(100)

  const handleCounts =()=>{
    setCount(count + 1)
    setRemaining(remaining - 1)
  }
  
  return (
    <div>
        <h1>Hello from {props.name}😎👋</h1>
        <button onClick={handleCounts}> Click me @ {props.name}</button>
        <br />
        <br />
        <span> {count} number of clicked ,from {remaining}</span>
        <hr />
    </div>
  )
}

export default MyItem;
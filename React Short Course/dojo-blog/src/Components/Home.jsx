import React from 'react'

function Home() {
    const handleClick=()=>{
        console.log("Hello World");
    }
    
    const handleClickAgain=(name)=>{
        console.log(`Hello ${name}`);
    }

  return (
    <div>
      <h2>Homepage</h2>
      <button onClick={handleClick }>Click Me</button>
      <button onClick={()=>handleClickAgain("Sparsh")}>Click Me Again</button>
    </div>
  )
}

export default Home

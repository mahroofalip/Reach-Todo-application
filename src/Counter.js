import React from 'react'
import { useState,useEffect } from 'react'
function Counter() {
    
    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log('Mounting.....')
        console.log('Updating .....',count);
        // return ()=>{
        //     console.log('Clean Up '+count);
        // }
    },[count])

 const incriment=()=>{
   setCount(count+1)
}
  return (
      
    <div>
        <button onClick={incriment}>Increment</button>
         <h1>hello iam component {count}</h1></div>
  )
}

export default Counter
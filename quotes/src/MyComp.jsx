import React, { useState } from 'react'
import './App.css'
function MyComp({Arry}) 

{

  let [item,setitem]=useState([])
  
  function del(index){
    setitem(Arry.splice(index,1))
  }
    return (
    <div className='orange'>
     {
      Arry.map((val,index)=>{return <div className='op'>
        <p className='write' key={index}>{val.content} </p>
        <p className='auth'>  {val.author}</p>
        <button onClick={()=>del(index)} >❌</button>
      </div>})
     }
    </div>
  )
}

export default MyComp

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MyComp from './MyComp'
function App() {
let [quote,setQuote]=useState([])
let [click,setclick]=useState(0)
let [arr,setarr]=useState([])
function colr(){
  let col = '#'+ (Math.random()*1000000).toFixed(0)

  return col
}
  useEffect(()=>{
    axios.get('https://api.quotable.io/random')
    .then((resp)=>{setQuote(resp.data)})
    .catch((err)=>console.log(err))
    window.document.body.style.background = colr()
  },[click])
  let c=0
  function addItem(){
    
    setarr([...arr,{content:quote.content,author:quote.author}])
    // console.log(arr)
     }
    
  return (
    <div className='myp'  style={{backgroundColor:'white'}}>
      <p>{quote.content}</p>
      <p >{quote.author}</p>
      <button onClick={()=>setclick(click+1)}>Click</button>
      <button onClick={addItem}>Save</button>
      
      <MyComp Arry={arr}/>
          </div>
  )
}

export default App

import React, { useState } from 'react'
import { useEffect } from 'react';
import Bolly_card from './Bolly_card'
import Right from './Right'


const Bollywood = () => {
  const [val,setVal]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/bollywood')
    .then(bollyres=>bollyres.json())
    .then(bollyres=>setVal(bollyres))
  },[])
  console.log(val);
  return (
    <div className="container">
      <div className="left-container">
      <h2 style={{fontSize:'35px',letterSpacing:'5px'}}>Bollywood</h2>
      <hr style={{width:'200px',marginTop:'8px',height:'2px',color:'darkblue'}}/><br/>
      {
        val.map((val1,i)=>{
          console.log(val1)
          return(
              <Bolly_card img={val1.img} title={val1.title} date={val1.date}
              content={val1.content} CategoryName={val1.CategoryName} key={i}/>
          )
        })
      }
      </div>
      <div className="right-container">
      <Right/>
      </div>
      
    </div>
  )
}

export default Bollywood
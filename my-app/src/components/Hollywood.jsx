import React,{useEffect,useState} from 'react'
import Bolly_card from './Bolly_card'
import Right from './Right'

const Hollywood = () => {
  const [val,setVal]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/hollywood')
    .then(hollyres=>hollyres.json())
    .then(hollyres=>setVal(hollyres))
  },[])
  return (
    <div className="container">
      <div className="left-container">
      <h2 style={{fontSize:'35px',letterSpacing:'5px'}}>Hollywood</h2>
      <hr style={{width:'200px',marginTop:'8px',height:'2px',color:'darkblue'}}/><br/>
      {
        val.map((hollyres,i)=>{
          return(
              <Bolly_card img={hollyres.img} title={hollyres.title} date={hollyres.date}
              content={hollyres.content} CategoryName={hollyres.CategoryName} key={i}/>
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

export default Hollywood
import React,{useState,useEffect} from 'react'
import Bolly_card from './Bolly_card'
import Right from './Right'



const Fitness = () => {
  const [val,setVal]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/fitness')
    .then(fitnessres=>fitnessres.json())
    .then(fitnessres=>setVal(fitnessres))
  },[])
  return (
    <div className="container">
    <div className="left-container">
    <h2 style={{fontSize:'35px',letterSpacing:'5px'}}>Fitness</h2>
    <hr style={{width:'200px',marginTop:'8px',height:'2px',color:'darkblue'}}/><br/>
    {
      val.map((fitnessres,i)=>{
        return(
            <Bolly_card img={fitnessres.img} title={fitnessres.title} date={fitnessres.date}
            content={fitnessres.content} CategoryName={fitnessres.CategoryName} key={i}/>
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

export default Fitness
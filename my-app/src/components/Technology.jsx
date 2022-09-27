import React,{useEffect,useState} from 'react'
import Bolly_card from './Bolly_card'
import Right from './Right'


const Technology = () => {
  const [val,setVal]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/technology')
    .then(techres=>techres.json())
    .then(techres=>setVal(techres))
  },[])
  return (
    <div className="container">
      <div className="left-container">
      <h2 style={{fontSize:'35px',letterSpacing:'5px'}}>Technology</h2>
      <hr style={{width:'200px',marginTop:'8px',height:'2px',color:'darkblue'}}/><br/>
      {
        val.map((techres,i)=>{
          return(
              <Bolly_card img={techres.img} title={techres.title} date={techres.date}
              content={techres.content} CategoryName={techres.CategoryName} key={i}/>
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

export default Technology
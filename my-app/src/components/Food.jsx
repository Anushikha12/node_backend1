import React,{useEffect,useState} from 'react'
import Bolly_card from './Bolly_card'
import Right from './Right'

const Food = () => {
  const [val,setVal]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/food')
    .then(foodres=>foodres.json())
    .then(foodres=>setVal(foodres))
  },[])
  return (
    <div className="container">
    <div className="left-container">
    <h2 style={{fontSize:'35px',letterSpacing:'5px'}}>Food</h2>
    <hr style={{width:'200px',marginTop:'8px',height:'2px',color:'darkblue'}}/><br/>
    {
      val.map((foodres,i)=>{
        return(
            <Bolly_card img={foodres.img} title={foodres.title} date={foodres.date}
            content={foodres.content} CategoryName={foodres.CategoryName} key={i}/>
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

export default Food
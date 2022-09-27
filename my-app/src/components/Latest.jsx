import React,{useEffect,useState} from 'react'
// import { fitness_data } from '../fitness_data'
// import { tech_data } from '../technology_data'
// import { food_data } from '../food_data'
import {Link} from 'react-router-dom'

const Latest = () => {
  const [val,setVal]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/hollywood')
    .then(hollyres=>hollyres.json())
    .then(hollyres=>setVal(hollyres))
  },[])
  return (
    <>
      <div className="container">
        <h2>The Latest</h2>
        <hr style={{width:'200px',marginTop:'8px'}}/>
        <div className="latest-elements">
          <div className="element1">
            {
             val.map((hollyres,i)=>{
                if(i>=val.length-1)
                {
                return(
                  <>
                  <img src={hollyres.img} alt="" width="350px" height="200px" style={{marginTop:'15px',borderRadius:'25px'}} className='element-image' />
                  <div className="element-content">
                    <h4><Link to={`/article/${hollyres.title}/${hollyres.CategoryName}`}>{hollyres.title}</Link></h4><br/>
                    <p>{hollyres.content}</p><br/>
                    <h5>{hollyres.date}</h5>
                  </div>
                  </>
                )
                }
              })
             
            }
            </div>
            <div className="element1">
              {
              val.map((hollyres,i)=>{
                if(i>=val.length-1)
                {
                return(
                  <>
                  <img src={hollyres.img} alt="" width="350px" height="200px" style={{marginTop:'15px',borderRadius:'25px'}} className='element-image' />
                  <div className="element-content">
                    <h4><Link to={`/article/${hollyres.title}/${hollyres.CategoryName}`}>{hollyres.title}</Link></h4><br/>
                    <p>{hollyres.content}</p><br/>
                    <h5>{hollyres.date}</h5>
                  </div>
                  </>
                )
                }
              })
             
            }
            </div>
            <div className="element1">
              {
              val.map((hollyres,i)=>{
                if(i>=val.length-1)
                {
                return(
                  <>
                  <img src={hollyres.img} alt="" width="350px" height="200px" style={{marginTop:'15px',borderRadius:'25px'}} className='element-image' />
                  <div className="element-content">
                    <h4><Link to={`/article/${hollyres.title}/${hollyres.CategoryName}`}>{hollyres.title}</Link></h4><br/>
                    <p>{hollyres.content}</p><br/>
                    <h5>{hollyres.date}</h5>
                  </div>
                  </>
                )
                }
              })
             
            }
            </div>
        </div>
      </div>
    </>
  )
}


export default Latest
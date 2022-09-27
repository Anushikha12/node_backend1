import React,{useEffect,useState} from 'react'
// import { food_data } from '../food_data'
import Bolly_card from './Bolly_card'
// import { bolly_data } from '../bollywood_data'


const Latest_articles = () => {
  const [val,setVal]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/bollywood')
    .then(bollyres=>bollyres.json())
    .then(bollyres=>setVal(bollyres))

  },[])
  return (
    <div className="container">
        <h2>Latest Articles</h2>
        <hr/>
        <div className="latest_articles">
            <div className="latest_articles_left">
                {/* <Bollywood/> */}
                <div className="left-container">
      {/* <h2 style={{fontSize:'35px',letterSpacing:'5px'}}></h2> */}
      <hr style={{width:'200px',marginTop:'8px',height:'2px',color:'darkblue'}}/><br/>
      {
       val.map((bollyres,i)=>{
          return(
              <Bolly_card img={bollyres.img} title={bollyres.title} date={bollyres.date}
              content={bollyres.content}  CategoryName={bollyres.CategoryName} key={i}/>
          )
        })
      }
      </div>
                <img src="https://images.pexels.com/photos/4913345/pexels-photo-4913345.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width='68%' height='15%' style={{borderRadius:'25px',marginTop:'10px'}} className='element-image' />
            </div>
        </div>
    </div>
  )
}

export default Latest_articles
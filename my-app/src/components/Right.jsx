import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

const Right = () => {
    const [val,setVal]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:4000/food')
      .then(foodres=>foodres.json())
      .then(foodres=>setVal(foodres))
    },[])
  return (
    <div className="latest_articles_right">
    <div className="advertisement"></div>
    <div className='top-post'>
        <h2 style={{fontSize:'30px'}}>Top Posts</h2>
        <hr/>
        {
            val.map((foodres,i)=>{
                return(
                    <div className="top-post-content" key={i}>
                    <img src={foodres.img} alt="" height='230px'  width='300px' style={{borderRadius:'25px',marginTop:'40px'}} /><br/>
                    <div className="top-post-right-content">
                        <h3><Link to={`/article/${foodres.title}/${foodres.CategoryName}`}>{foodres.title}</Link></h3>
                        <h3>{foodres.date}</h3>
                    </div>
                    <br/>
                    <hr/>
                </div>
                )
            })
        }   
    </div>
</div>
  )
}

export default Right
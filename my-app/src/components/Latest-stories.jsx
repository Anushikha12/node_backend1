import React,{useEffect,useState} from 'react'
// import {tech_data} from '../technology_data'
// import {fitness_data} from '../fitness_data'
// import { food_data } from '../food_data'
import { Link } from 'react-router-dom'

const Latest_stories = () => {
    const [val,setVal]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:4000/technology')
      .then(techres=>techres.json())
      .then(techres=>setVal(techres))
    },[])
  return (
    <div className="container last-element">
        <h1>Latest Stories</h1>
        <hr style={{margin:'1%'}}/>
        <div className="latest_story">
            {
               val.map((techres,i)=>{
                    if(i>=val.length-1){
                        return(
                            <div className="story1" key={i}>
                            <h3 style={{color:'brown'}}><Link to={`/article/${techres.title}/${techres.CategoryName}`}>{techres.title}</Link></h3><br/>
                            <p>{techres.content}</p>
                            <br/>
                            <h4  style={{color:'brown'}}>{techres.date}</h4>
                        </div>
                        )
                    }
                })
            }
             {
                val.map((techres,i)=>{
                    if(i>=val.length-1){
                        return(
                            <div className="story1" key={i}>
                            <h3 style={{color:'brown'}}><Link to={`/article/${techres.title}/${techres.CategoryName}`}>{techres.title}</Link></h3><br/>
                            <p>{techres.content}</p>
                            <br/>
                            <h4 style={{color:'brown'}}>{techres.date}</h4>
                        </div>
                        )
                    }
                })
            }
              {
                val.map((techres,i)=>{
                    if(i>=val.length-1){
                        return(
                            <div className="story1" key={i}>
                            <h3 style={{color:'brown'}}><Link to={`/article/${techres.title}/${techres.CategoryName}`}>{techres.title}</Link></h3><br/>
                            <p>{techres.content}</p>
                            <br/>
                            <h4 style={{color:'brown'}}>{techres.date}</h4>
                        </div>
                        )
                    }
                })
            }
        </div>
    </div>
  )
}

export default Latest_stories
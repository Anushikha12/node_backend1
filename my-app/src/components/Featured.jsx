import React,{useEffect,useState} from 'react'
// import { bolly_data } from '../bollywood_data'
// import { holly_data } from '../hollywood_data'
// import { food_data } from '../food_data'

const Featured = () => {
    const [val,setVal]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:4000/fitness')
      .then(fitnessres=>fitnessres.json())
      .then(fitnessres=>setVal(fitnessres))
    },[])
  return (
    <div className='container'>
    <div className="main-content">
        {
            val.map((fitnessres,i)=>{
                if(i>=val.length-1){
                    return(
                        <div className='item1' style={{
                            backgroundImage: `url(${fitnessres.img})`,
                            backgroundPosition: 'center',
                            /* background-repeat: no-repeat; */
                            backgroundSize: 'cover',
                            height:'35rem',
                            width:'68%',
                            borderRadius:'25px'
                        }}>
                        <div className='content'>
                        <p>{fitnessres.date}</p>
                        </div>
                    </div>
                    )
                  
                }
            })
        }
        {
            val.map((fitnessres,i)=>{
                if(i>=val.length-1){
                    return(
                        <div className='item2' style={{
                            backgroundImage: `url(${fitnessres.img})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            height:'15rem',
                            width:'30%',
                            borderRadius: '25px',
                            position:'absolute',
                            left:'70%'
                        }}>
                        <div className="content">
                        <p>{fitnessres.date}</p>
                        </div>
                    </div>
                    )
                   
                }
            })
        }
        {
           val.map((fitnessres,i)=>{
                if(i>=val.length-1){
                    return(
                        <div className='item3' style={{
                            backgroundImage: `url(${fitnessres.img})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            height:'15rem',
                            width:'30%',
                            borderRadius: '25px',
                            position:'absolute',
                            left:'70%',
                            top:'55%'
                        }}>
                        <div className="content">
                            <p>{fitnessres.date}</p>
                            </div>
                        </div>
                    )
                   
                }
            })
        }
    </div>
</div>
  )
}

export default Featured
import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import {AiFillInstagram,AiOutlineWhatsApp,AiFillTwitterSquare,AiFillFacebook} from 'react-icons/ai'
import {useParams,Link} from 'react-router-dom'
// import { bolly_data } from '../bollywood_data'
// import { holly_data } from '../hollywood_data'
// import { food_data } from '../food_data'
// import {fitness_data} from '../fitness_data'
// import { tech_data } from '../technology_data'

const ContentPage = () => {
  const { articleTitle, articleCategory } = useParams();
  const [val,setVal]=useState([]);
  const [val1,setVal1]=useState([]);
  const [val2,setVal2]=useState([]);
  const [val3,setVal3]=useState([]);
  const [val4,setVal4]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/bollywood')
    .then(bollyres=>bollyres.json())
    .then(bollyres=>setVal(bollyres))

    fetch('http://localhost:4000/fitness')
    .then(fitnessres=>fitnessres.json())
    .then(fitnessres=>setVal1(fitnessres))

    fetch('http://localhost:4000/food')
    .then(foodres=>foodres.json())
    .then(foodres=>setVal2(foodres))

    fetch('http://localhost:4000/hollywood')
    .then(hollyres=>hollyres.json())
    .then(hollyres=>setVal3(hollyres))

    fetch('http://localhost:4000/technology')
    .then(techres=>techres.json())
    .then(techres=>setVal4(techres))
  },[])
  console.log(val);
  return (
    <div>
      {
        val.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=634ef18d-4b67-4093-a80d-a9eff4e5b1cf&api_key=CometServer1&access_token=1662147769_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_cbe9e3d06da82a2a470f259032c1ad59ac7911dd" alt="user" />
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p> {article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        <AiFillFacebook size="30px"/>
        <AiFillTwitterSquare size="30px"/>
        <AiFillInstagram size="30px"/>
        <AiOutlineWhatsApp size="30px"/>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="bollywood" height="400px" width="600px" className='tech-image'/>
      <p className='text'>{article.content}</p>
      <br/><br/>
      <p className='text'>Let's talk about them</p>
      <br/>

    <br/>
      <Card className='tech-footer'>
      <Card.Header>WRITTEN BY</Card.Header>
      <Card.Body>
        <Card.Title>Anushikha</Card.Title>
        <Card.Text>
        {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
    {
        val3.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=634ef18d-4b67-4093-a80d-a9eff4e5b1cf&api_key=CometServer1&access_token=1662147769_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_cbe9e3d06da82a2a470f259032c1ad59ac7911dd" alt="user" />
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p> {article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        <AiFillFacebook size="30px"/>
        <AiFillTwitterSquare size="30px"/>
        <AiFillInstagram size="30px"/>
        <AiOutlineWhatsApp size="30px"/>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="hollywood" height="400px" width="600px"/>
      <p className='text'>{article.content}</p>
      <br/><br/>
      <p className='text'>Let's talk about them</p>
      <br/>

    <br/>
      <Card className='tech-footer'>
      <Card.Header>WRITTEN BY</Card.Header>
      <Card.Body>
        <Card.Title>Anushikha</Card.Title>
        <Card.Text>
        {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
       {
       val4.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=634ef18d-4b67-4093-a80d-a9eff4e5b1cf&api_key=CometServer1&access_token=1662147769_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_cbe9e3d06da82a2a470f259032c1ad59ac7911dd" alt="user" />
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p> {article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        <AiFillFacebook size="30px"/>
        <AiFillTwitterSquare size="30px"/>
        <AiFillInstagram size="30px"/>
        <AiOutlineWhatsApp size="30px"/>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="technology" height="400px" width="600px"/>
      <p className='text'>{article.content}</p>
      <br/><br/>
      <p className='text'>Let's talk about them</p>
      <br/>

    <br/>
      <Card className='tech-footer'>
      <Card.Header>WRITTEN BY</Card.Header>
      <Card.Body>
        <Card.Title>Anushikha</Card.Title>
        <Card.Text>
        {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
       {
       val1.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=634ef18d-4b67-4093-a80d-a9eff4e5b1cf&api_key=CometServer1&access_token=1662147769_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_cbe9e3d06da82a2a470f259032c1ad59ac7911dd" alt="user" />
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p>{article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        <AiFillFacebook size="30px"/>
        <AiFillTwitterSquare size="30px"/>
        <AiFillInstagram size="30px"/>
        <AiOutlineWhatsApp size="30px"/>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="fitness" height="400px" width="600px"/>
      <p className='text'>{article.content}</p>
      <br/><br/>
      <p className='text'>Let's talk about them</p>
      <br/>

    <br/>
      <Card className='tech-footer'>
      <Card.Header>WRITTEN BY</Card.Header>
      <Card.Body>
        <Card.Title>Anushikha</Card.Title>
        <Card.Text>
        {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
       {
        val2.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=634ef18d-4b67-4093-a80d-a9eff4e5b1cf&api_key=CometServer1&access_token=1662147769_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_cbe9e3d06da82a2a470f259032c1ad59ac7911dd" alt="user" />
          <div className="tech-title-user">
            <h3>Anushikha</h3><br/>
            <p>{article.date}</p>
          </div>
        </div>
        <div className='tech-title-right'>
        <AiFillFacebook size="30px"/>
        <AiFillTwitterSquare size="30px"/>
        <AiFillInstagram size="30px"/>
        <AiOutlineWhatsApp size="30px"/>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="food" height="400px" width="600px"/>
      <p className='text'>{article.content}</p>
      <br/><br/>
      <p className='text'>Let's talk about them</p>
      <br/>

    <br/>
      <Card className='tech-footer'>
      <Card.Header>WRITTEN BY</Card.Header>
      <Card.Body>
        <Card.Title><b>Anushikha</b></Card.Title>
        <Card.Text>
         {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
         <div className="container">
            <h2>More From The Siren</h2>
            <hr/><br/>
            <div className="more-data">
              {
                // eslint-disable-next-line
                val.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=val.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}>Anushikha</h3><br/>
                           <p>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
                 {
                // eslint-disable-next-line
                val3.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=val3.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}>Anushikha</h3><br/>
                           <p>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
                 {
                // eslint-disable-next-line
                val4.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=val4.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}>Anushikha</h3><br/>
                           <p>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
                 {
                // eslint-disable-next-line
                val1.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=val1.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}>Anushikha</h3><br/>
                           <p>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
                      {
                // eslint-disable-next-line
                val2.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=val2.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}>Anushikha</h3><br/>
                           <p>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
            </div>
        </div> 
    </div>
  )
}

export default ContentPage
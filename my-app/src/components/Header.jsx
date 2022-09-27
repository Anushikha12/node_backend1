import React from 'react'
import Title from './TItle'
import Home from './Home'
import Bollywood from './Bollywood'
import Technology from './Technology'
import Hollywood from './Hollywood'
import Fitness from './Fitness'
import Food from './Food'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import PageNotFound from './PageNotFound'
import ContentPage from './ContentPage'



const Header = () => {
  return (
    <BrowserRouter>
       <Title/>
       <Navbar/>
       <hr className='horizontal'/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/bollywood' element={<Bollywood />}></Route>
        <Route path='/technology' element={<Technology/>}></Route>
        <Route path='/hollywood' element={<Hollywood/>}></Route>
        <Route path='/fitness' element={<Fitness/>}></Route>
        <Route path='/food' element={<Food/>}></Route>
        <Route path='/article/:articleTitle/:articleCategory' element={<ContentPage/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
       </Routes>
     
        </BrowserRouter>
  )
}
export default Header;

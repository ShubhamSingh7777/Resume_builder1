import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import r1 from '../images/r1.jpg'
import r2 from '../images/r2.jpg'
import r3 from '../images/r3.jpg'
import r4 from '../images/r4.jpg'

const Home = () => {

  return (
    <>
      <div className='container_box'>
        <div className='box1'>
          <Link to={"/desgine/1"}> <img src={r1} width="95%" alt="" /> </Link>
        </div>
        <div className='box1'>
        <Link to={"/desgine/2"}><img src={r2} width="95%" alt="" /> </Link> 
         </div>
        <div className='box1'>
          <Link to={"/desgine/3"}> <img src={r3} width="95%" alt="" /></Link> 
          </div>
        <div className='box1'>
          <Link to={"/desgine/4"}> <img src={r4} width="95%" alt="" /></Link> 
          </div>
      </div>
    </>
  )
}

export default Home
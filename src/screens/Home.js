import React, { useContext, useEffect, useRef, useState } from 'react'

import { useCart } from '../components/ContextReducer'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from '../components/About'
 import Card from '../screens/Card/Card'
 import "../components/style/Home.css"
export default function Home() {

const menu =useRef()
console.log(menu)


  return (
    <div className='bg-[black]'>
      <div >
      <Navbar />
        <div className=' relative h-screen w-full bg-black overflow-hidden'>
     <div className="absolute z-12 w-full top-0 ">
      <img className=' w-[100%] object-cover  h-screen ' style={{ filter:"brightness(50%)",backgroundSize:"contain"}} src='https://codingcirculate-restaurant-design.on.fleek.co/static/media/home-img.965e18e60a1521e7e1af'/>

     </div>
     <div id='text-Response' className=" absolute z-9 left-[5vw]  top-[20vw]">
  <h1 style={{textAlign:"start"}} className=' text-[6vw] text-white fw-bold fw-bold1 text-arial'>
  FRESH <span className='text-[yellow]'>FOOD IN THE</span> <br/><span className='text'>MORNING</span>
  </h1>
  <p style={{opacity:"0.7"}} className='w-[65%] text-[1.5vw] text-white'>
  Revitalize your mornings with our selection of farm-fresh delights, delivering wholesome goodness to your doorstep.
  </p>
  <button style={{fontFamily:"arial",fontWeight:"600"}} className=' tracking-tighter hover transition duration-300 ease-in hover:ease-out h-[4vw] w-[13vw] text-[1.6vw] bg-[yellow] hover:w-[15vw] '>Get Your Now</button>
</div>
        </div>
        
        <div>
          <About/>
        </div>

<Card />
        
      </div>
     
      <Footer />
    </div>









  )
}
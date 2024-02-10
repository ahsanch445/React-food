import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='about h-full bg-black'>
    
<h1 className=' mt-[2vw] text-whier text-[4vw] text-white'><span className='text-[yellow] fw-bold'>About</span> Us</h1>

    <div className='flex items-center justify-center'>
        <img className=' w-[80%] h-[50vw]' src='https://codingcirculate-restaurant-design.on.fleek.co/static/media/about-img.b50db0fa2bfd668b3a06'/>
      
        </div> 
     
        <div className='  flex items-center justify-center'>
        <div className='p-[1vw] w-[80%] bg-[#13131A]'>
            <h1 className='text-[4vw]' style={{textAlign:"start",color:"white"}}>  What Makes Our Food Special?</h1>
                <p className='text-[1.6vw] about-data-p text-[white]'>
              
                 Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem?

              
                </p>
                <p  className='text-[white] text-[1.6vw]'>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur Obcaecati Sapiente?</p>
            </div>
        </div>
    </div>

    
    </>
    
  )
}

export default About

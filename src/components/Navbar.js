/* eslint-disable react/jsx-no-undef */

import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Badge } from 'react-bootstrap';
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import "./style/Nav.css"
import "./style/Home.css"

const SearchInput = () => {
    
    const  {Search,setSearch}=useCart() 
    return (
      <div className='absolute top-[100%] right-[13vw]  z-50'>
       < input value={Search} onChange={(e)=> setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
        cla className="transition-transform duration-300 ease-in-out transform scale-100 focus:scale-105 px-2 py-1 my-2 border rounded-md"
      />
      
    
      </div>
    );


  };
 
export default function Navbar(props) {
    const [isOpen, setisOpen] = useState(false)
    const [searchVisible, setSearchVisible] = useState(false); // Add state for se
    const [cartView, setCartView] = useState(false)
    localStorage.setItem('temp', "first")
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user')

        navigate("/login")
    }

    const loadCart = () => {
        setCartView(true)
    }

    const {state} = useCart();
    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
      };
      const hamBargar = ()=>{
        setisOpen(!isOpen)
          }

  
    return (
        <div id='nav-Height'  style={{position:"absolute",padding:" 0.9vw 7vw",display:"flex",borderBottom:"solid yellow 1px"}} className='bg-black sticky top-0 right-0 z-10 left-0 flex items-center justify-between text-white p-[12vw] w-full'>
           <div   className='none'>
      
            <img  className='Nav-Img h-[7vw]'  src='https://codingcirculate-restaurant-design.on.fleek.co/static/media/logo.bbdaaa34654aff804cc3.png' />
           </div>
<div  className='gap-[2vw] link flex' style={{textDecoration:"none",listStyle:"none"}}>
    
    <li><Link   className='text-[#ffff]  no-underline atag hoverclass' to="/">Home</Link></li>
    <li><Link className='text-[#ffff]  no-underline atag' to="/about">About</Link></li>
    <li><Link to="/menu" smooth={true} duration={500} className='text-[#ffff]  no-underline atag'>Menu</Link></li>
    {
        localStorage.getItem("user")? <li><Link  className='text-[#ffff] no-underline  atag' to='/myorder'>My Orders </Link></li>:"" 
    }
    <li><Link className='text-[#ffff] no-underline  atag' to="/contact">Contact Us</Link></li>
    
  

</div>
{
    isOpen?<div className='bg-black absolute z-auto p-[4vw] gap-4 h-[96vh] flex flex-col w-[80%] top-100 right-[0%] '>
    <Link   className='text-[#ffff]   no-underline atag hoverclass' to="/">Home</Link>
    <Link className='text-[#ffff]  no-underline atag' to="/about">About</Link>
    <Link to="/menu" smooth={true} duration={500} className='text-[#ffff]  no-underline atag'>Menu</Link>
    
    {
            localStorage.getItem("user")?<Link  className='text-[#ffff] no-underline  atag' to='/myorder'>My Orders </Link>:
    
    
    <form className="flex flex-col gap-[4vw]">
                                    <Link style={{fontWeight: "500"}} className=' me-[2vw] text-[#ffff] no-underline  atag1' to="/login">Login</Link>
                                    <Link style={{fontWeight: "500"}} className='text-[#ffff] no-underline  atag1'  to="/signup">Signup</Link>
                                </form> 
    
    
    
    
    
    
    
    
    
    
            
            }
            
            
    </div>:""
}

<div   onClick={hamBargar} className=' absolute right-4 nav2 '>
  <div style={{border:"1px solid white"}} className='w-[5vw]'></div>
  <div  style={{border:"1px solid white"}} className='w-[5vw] mt-1'></div>
  <div  style={{border:"1px solid white"}} className='w-[5vw] mt-1'></div>
</div>
{localStorage.getItem("user")?<div className=' nav3 flex justify-end  w-[14vw] data' >
    
<SearchIcon  onClick={toggleSearch} className=' me-[3vw] cursor-pointer' />
{searchVisible && <SearchInput />}
        
<div className="cursor-pointer" onClick={loadCart}>  
 <ShoppingCartIcon  />
 {state.length !=0? <Badge className='' style={{color:"black",boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)'}}  pill bg='warning'>{state.length}</Badge> :""}
 </div>

    {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}

</div>  : <div><form id='data2' className="d-flex">
                                <Link style={{fontWeight: "500"}} className=' me-[2vw] text-[#ffff] no-underline  atag1' to="/login">Login</Link>
                                <Link style={{fontWeight: "500"}} className='text-[#ffff] no-underline  atag1'  to="/signup">Signup</Link>
                            </form> </div>}


        </div>
    )
}

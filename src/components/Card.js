
import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatchCart, useCart } from './ContextReducer'
import "./style/Home.css"
export default function Card(props) {
  let {state} = useCart();

  let navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const priceRef = useRef();
  const [btnEnable, setBtnEnable] = useState(false);
  let totval = 0
  let options = props?.options;


  let priceOptions = Object?.keys(options);
  let foodItem = props?.item;
  const dispatch = useDispatchCart();
 
  const handleQty = (e) => {
    setQty(e.target.value);
  }
  const handleOptions = (e) => {
    setSize(e.target.value);
  }
  const handleAddToCart = async () => {
    let food = []
    for (const item of state) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
   
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


   
  
  }
  const handleClick = () => {
    if (!localStorage.getItem("user")) {
      navigate("/login")
    }
  }
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  // useEffect(()=>{
  // checkBtn();
  //   },[data])


  let finalPrice = qty * parseInt(options[size]);   //This is where Price is changing
  totval += finalPrice
  
  return (
<section id='menu' >
<div style={{border:"1.5px solid yellow"}} className=' d-flex   justify-center px-[5vw] py-[4vw]  hover:bg-[#3B2C00]  h-[30vw] w-[45vw] Card'>
  <div   style={{textAlign:"center"}} >
  <img style={{marginLeft:"1vw"}}  className=' p-auto rounded-sm object-cover h-[10vw] w-[17vw] Card-Image ' src={foodItem.img}/>
<h1 className=' text-[2vw] Card-Text mt-[1vw]' style={{color:"white"}}>{foodItem.name}</h1>
<div className='flex justify-around items-center Card-Price-Row '>
  <div  className=' Card-Price text-[1.4vw] text-white '>
    Rs {finalPrice }
  </div>
 <div>
 <select    style={{ background: "yellow", color: "#000", opacity:"0.9"}} className=' Card-Iteams-Number me-1 fw-bold h-15   text-[1.4vw]   w-[4vw]  h-15' onChange={handleQty}  > 
  {Array?.from(Array(6),(e,i)=>{
    return <option  value={i+1} key={i+1}>{i+1}</option>
  })}
  
      </select>
      <select style={{ background: "yellow", letterSpacing:"-0.09vw",color: "#000",opacity:"0.9"}} className=" Card-Iteams-Size  text-[1.4vw]   w-[7vw]  h-15"  ref={priceRef} onChange={handleOptions}>
      {priceOptions.map((data)=>(
<option  key={data} value={data}>{data}</option>
      )
       
      )}
    </select>
 </div>
</div>
<button onClick={ function(){
    handleClick()
    handleAddToCart()}} className=' Card3 hover:h-[4.3vw] rounded-sm hover:w-[15vw] hover transition duration-300 ease-in hover:ease-out  Card-Btn bg-yellow-500 w-[13vw] mt-[1vw] h-[4vw] text-[#070606] fw-bold text-[1.5vw] '>Add To Cart</button>
  </div>

</div>

</section>
  )
}
//
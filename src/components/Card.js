
import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatchCart, useCart } from './ContextReducer'
// import { Dropdown, DropdownButton } from 'react-bootstrap';
export default function Card(props) {
  let data = useCart();

  let navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const priceRef = useRef();
  // const [btnEnable, setBtnEnable] = useState(false);
  // let totval = 0
  // let price = Object.values(options).map((value) => {
  //   return parseInt(value, 10);
  // });
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.item;
  const dispatch = useDispatchCart();
 
  const handleQty = (e) => {
    setQty(e.target.value);
  }
  const handleOptions = (e) => {
    setSize(e.target.value);
  }
  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
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
  // totval += finalPrice;
  // console.log(totval)
  return (
<div    >

<div   style={{backgroundColor:"#dadada"}}  className='mb-3'><div className="card object-cover "  style={{"width":"14rem","maxHeight":"361px"}}>
    <img   style={{height:"140px",objectFit:"fill",backgroundColor:"#dadada"}} src={foodItem.img} class="card-img-top " alt="..."/>
    <div style={{backgroundColor:"#dadada"}} className="card-body">
      <h5 style={{backgroundColor:"#dadada"}} className="card-title">{foodItem.name}</h5>
    
    
  
    </div>
  
    <div style={{backgroundColor:"#dadada"}} className="container w-100">
      <select  style={{ background: "#ff0157", color: "#fff", opacity:"0.9"}} className='m-2 fw-bold h-100' onChange={handleQty}  > 
  {Array.from(Array(6),(e,i)=>{
    return <option value={i+1} key={i+1}>{i+1}</option>
  })}
  
      </select>
    <select style={{ background: "#ff0157", color: "#fff",opacity:"0.9"}} className="m-2   h-100"  ref={priceRef} onChange={handleOptions}>
      {priceOptions.map((data)=>(
<option key={data} value={data}>{data}</option>
      )
       
      )}
    </select>
<div style={{backgroundColor:"#dadada"}} className=' d-inline-block fw-bold'>Rs{finalPrice }/</div>

  </div>

<div style={{backgroundColor:"#dadada",paddingTop:"10px"}} >
  <button  onClick={ function(){
    handleClick()
    handleAddToCart()
    
  }} style={{fontWeight:"600",height:"40px",justifyContent:"center ",width:"55%",  background: "#ff0157", color: "#fff",opacity:"0.9"}} className='btn ms-1 me-5 text-center  mb-1'>Add to Cart</button>
 </div>
  </div></div></div>
  )
}
//

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
  const handleClick = () => {
    if (!localStorage.getItem("user")) {
      navigate("/login")
    }
  }
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


    // setBtnEnable(true)

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
<div >

<div className='mb-3'><div className="card object-cover "  style={{"width":"18rem","maxHeight":"361px"}}>
    <img style={{height:"170px",objectFit:"fill"}} src={foodItem.img} class="card-img-top " alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{foodItem.name}</h5>
    
    
  
    </div>
  
    <div className="container w-100">
      <select className='m-2  h-100 bg-success' onClick={handleClick} onChange={handleQty}  > 
  {Array.from(Array(6),(e,i)=>{
    return <option value={i+1} key={i+1}>{i+1}</option>
  })}
  
      </select>
    <select className="m-2  h-100 bg-success"  ref={priceRef} onClick={handleClick} onChange={handleOptions}>
      {priceOptions.map((data)=>(
<option key={data} value={data}>{data}</option>
      )
       
      )}
    </select>
<div className=' d-inline-block fw-bold'>Rs{finalPrice }/</div>

  </div>
  <hr />

  <button onClick={ handleAddToCart} style={{fontWeight:"600",height:"40px",justifyContent:"center ",width:"50%"}} className='btn btn-success ms-1 me-5 text-center  mb-1 text-black'>Add to Cart</button>
 
  </div></div></div>
  )
}
//
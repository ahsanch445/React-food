import React from 'react'
import "../components/style/Home.css"
import { useCart, useDispatchCart } from '../components/ContextReducer';
import { BsFillTrashFill } from 'react-icons/bs';

export default function Cart() {
  let {state,Email} = useCart();
  let dispatch = useDispatchCart();
  if (state.length === 0) {
    return (
      <div className='flex items-center justify-center'> 
        <div className='m-5 w-100 text-center text-[3vw] text-white'>The Cart is Empty!</div>
      </div>
    )
  }


  const handleCheckOut = async () => {

    let response = await fetch("https://food-api-theta.vercel.app/orderData", {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: state,
        email: Email,
        order_date: new Date().toDateString()
      })
    });
  
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  let totalPrice = state.reduce((total, food) => total + food.price, 0)
  return (
    <div >

     
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead  className=' text-yellow-500 fs-4'>
            <tr className='text-[2vw]'>
              <th  scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {state.map((food, index) => (
              <tr className='text-[2vw]'>
                <th scope='row' >{index + 1}</th>
                <td className='text-white'>{food.name}</td>
                <td className='text-white'>{food.qty}</td>
                <td className='text-white'>{food.size}</td>
                <td  className='text-white'>{food.price}</td>
                <td ><button type="button" className="btn p-0 text-white"><BsFillTrashFill onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='text-[3vw] text-white'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button style={{fontSize:"2vw"}} id="checkbtn"  className=' p-1 h-[5vw] w-[12vw] btn  mt-5 ' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>



    </div>
  )
}

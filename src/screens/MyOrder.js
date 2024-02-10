import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("https://food-api-theta.vercel.app/myOrderData", {
           
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
             email:localStorage.getItem('email')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })



     

    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div className=' bg-black '>
            <div>
                <Navbar />
            </div>

            <div className=' bg-black container flex justify-center items-center mt-[5vw]'>
                <div className=''>

                    {orderData !== {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                    {arrayData.Order_date ? <div className=' text-yellow-400 m-auto mt-5'>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </div> :

                                                        <div  className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3  bg-black" style={{ padding:"1vw",  width: "45vw",border:"1px solid yellow", marginTop:"2vw" }}>
                                                                <img src={arrayData.img}  className="card-img-top " alt="..." style={{ height: "20vw", objectFit: "fill" }} />
                                                                <div className="card-body bg-black">
                                                                    <h5  className="text-white card-title text-[3vw]">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1 text-[1.8vw] text-white '>{arrayData.qty}</span>
                                                                        <span className='m-1 text-[1.8vw] text-white '>{arrayData.size}</span>
                                                                        <span className='m-1 text-[1.8vw] text-white '>{data}</span>
                                                                        <div className='text-white  text-[1.8vw] d-inline ms-2 h-100 w-20 ' >
                                                                            Rs{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : <h2 style={{marginTop:"230px", marginBottom:"270px",display:"flex", justifyContent:"center"}}  className='   w-100 text-black fw-bold m-7'> No Order Found!</h2>
                        )
                    }) : ""}
                </div>


            </div>

            <Footer />
        </div>
    )
}

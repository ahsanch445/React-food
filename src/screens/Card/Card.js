import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import CardItem from "../../components/Card"; 
import { useCart } from '../../components/ContextReducer';

const Card = () => {
    const {Search}=useCart()
  const [foodCat, setFoodCat] = useState([])
  const [foodItems, setFoodItems] = useState([])
  
  const loadFoodItems = async () => {
    let response = await fetch("https://food-api-theta.vercel.app/foodData", {
    
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    });
    response = await response.json()
   
    setFoodItems(response[0])
    setFoodCat(response[1])
  }

  useEffect(() => {
    loadFoodItems()
  }, [])

  return (
  <div className='bg-black'>
    <Navbar/>
  <div className='px-5 g-black'>
      <h1 className='text-white fw-bold mt-[2vw]'>
        Our <span className='text-yellow-500'>Menu</span>
      </h1>

      {foodCat?.length > 0 &&
        foodCat.map((data) => (
          <div className='row flex items-center justify-between' key={data.id}>
            <div className='fs-2 m-3 fw-bold text-white'>{data.CategoryName}</div>
            <hr className='bg-yellow-500' style={{ height: '4px' }} />
            {foodItems.length > 0 ? (
              foodItems
                .filter(
                  (items) =>
                    items.CategoryName === data.CategoryName &&
                    items.name.toLowerCase().includes(Search.toLowerCase())
                )
                .map((filterItems) => (
                  <div key={filterItems.id} className='p-7 col-12 col-md-6 col-lg-6'>
                    <CardItem foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img}></CardItem>
                  </div>
                ))
            ) : (
              <div>No Such Data</div>
            )}
          </div>
        ))}
    </div>
  
  </div>
   
  );
};

export default Card;

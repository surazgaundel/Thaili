import React from 'react'
import { priceFormat,mrpPrice } from '../utils/helper'
import RatingStar from './RatingStar'
import {Link } from 'react-router-dom'
export default function Product({id,title,price,discountPercentage,rating,brand,images}) {


  return (
    <div key={id} className='container shadow-white rounded-md shadow-sm hover:scale-105 cursor-pointer'>
        <div>
            <img src={images[0]} alt={title} className='w-full h-32 object-cover rounded-t-md'/>
        </div>
        <div className='flex flex-col p-1'>
            <h1 className='text-2xl font-semibold mt-1'>{title}</h1>
            <p className='text-xs'>Brand: {brand}</p>
            <div className='flex gap-2 items-center'>
            <p className='text-xl'>{priceFormat(price)}</p>
            <p className='text-sm md:text-base line-through opacity-60'>MRP:{mrpPrice(price,discountPercentage)}</p>
            <p className='text-xs md:text-base'>{discountPercentage} %</p>
            </div>
            <p><RatingStar rating={rating}/></p>
        </div>
        <div className='my-2'>
            <Link to={`/products/${id}`} className="bg-red px-2 py-1 m-1 text-blue border hover:bg-white rounded-md hover:text-black">Details</Link>
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import {FaShoppingBasket} from 'react-icons/fa'
import {CiCircleRemove} from 'react-icons/ci'
import { useProductContext } from '../context/ProductContext';
import { priceFormat } from '../utils/helper';

export default function Bag() {
    const {cartItem,removeItem,clearCart} = useProductContext();


    if(cartItem.length<1){
        return(<div className="flex items-center justify-center h-screen">Your cart is currently empty.</div>)
    }

  return (
    <main>
        <div className="container flex flex-col justify-center min-h-[80vh]">
        <h1 className="flex gap-2 mb-4">Cart Item <span><FaShoppingBasket/></span></h1>
        <div className="flex flex-col gap-2 items-center ">
            {cartItem.map(item=>{
                const {id,title,image,amount,price}=item;
                return(
                    <div key={id} className="flex justify-around border rounded-md shadow-sm w-[100%]">
                    <div className='flex flex-col md:flex-row gap-2'>
                    <img src={image} className={`h-16 md:h-24 w-24 object-cover rounded-md`} alt={`featured products${title}`} />
                        <section>
                        <h1 className='capitalize font-bold text-sm my-2'>{title}</h1>
                        <p className='text-sm text-blue font-bold leading-8 tracking-wide'>{priceFormat(price)}</p>
                        </section>
                    </div>
                    <div className="flex items-center justify-around gap-2">
                        <p className="sm:block font-semibold">Total :{priceFormat(amount*price)}</p>
                        <p className="sm:block font-semibold">Count :{amount}</p>
                        <section className='text-2xl text-blue cursor-pointer'>
                            <CiCircleRemove onClick={()=>removeItem(id)}/>
                        </section>
                    </div>
                </div>
                )
            })}
        </div>
        <section>
        </section>
        <button className="border hover:border-red bg-yellow hover:bg-transparent hover:text-red w-1/3 m-auto rounded-md p-2" onClick={clearCart}>Clear All</button>
        </div>
    </main>
  )
}

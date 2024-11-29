import React from 'react'
import { useProductContext } from '../context/ProductContext'

export default function Category() {

  const {allProducts,categories,updateProducts}=useProductContext();
  
  //create unique category array.
  let unique=allProducts.map(product=>product['category'])
  const uniqueCategories=['all',...new Set(unique)];

  return (
    <div>
    <div className='container'>
          <div className='flex flex-col lg:flex-row  lg:items-center justify-around'>
            {uniqueCategories.map((item,index)=>{
              return (
              <button 
              onClick={updateProducts} 
              className={` border px-2 py-1 rounded-md bg-blue text-yellow hover:bg-yellow hover:text-blue capitalize ${categories===item.toLowerCase()?'active':null}`} 
              key={index}
              name='categories'
              >{item}</button>)
            })}
          </div>
        </div>
    </div>
  )
}

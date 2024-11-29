/* eslint-disable react/prop-types */
import { useState } from 'react'
import Amount from './Amount';
import {Link} from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';

export default function AddToCart({product}) {

    const {addToCart}=useProductContext();
    const {id,stock}=product;

    const [amount, setAmount]=useState(1);

    const IncreaseAmount=()=>{
        setAmount(prev=>{
            let tempAmount=prev+1;
            if(tempAmount>stock){
                tempAmount=stock;
            }
            return tempAmount;
        })
    }

    const DecreaseAmount=()=>{
        setAmount(prev=>{
            let tempAmount=prev-1;
            if(tempAmount<1){
                tempAmount=1;
            }
            return tempAmount;
        })
    }

  return (
    <div>
        <div>
            <Amount 
            amount={amount} 
            IncreaseAmount={IncreaseAmount} 
            DecreaseAmount={DecreaseAmount}/>
        </div>
        <Link 
        to='/cart' 
        className='p-2 border  border-blue bg-blue text-white hover:text-black hover:bg-white rounded-md text-base' 
        onClick={()=>addToCart(id,amount,product)}
        >Add to Cart</Link>
    </div>
  )
}

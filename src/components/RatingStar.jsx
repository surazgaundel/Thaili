import React from 'react'
import {BsFillStarFill,BsStarHalf,BsStar} from 'react-icons/bs'
export default function RatingStar({rating}) {
    const tempStar=Array.from({length:5},(item,index)=>{
        const number=index+0.5;
        return(
            <span key={index}>
                {
                rating>=index+1? <BsFillStarFill/>:rating>=number?<BsStarHalf/>:<BsStar/>
                }
            </span>
        )
    })
  return (
    <section className="flex text-yellow gap-1 text-sm mb-1">
        {tempStar}
    </section>
  )
}

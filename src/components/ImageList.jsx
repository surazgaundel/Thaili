/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function ProductImage({images=[]}) {


    const [mainImage,setMainImage]=useState(images[0]);

    return (
    <div className="flex flex-col justify-center">
        <img className='md:h-[50vh] object-cover rounded-sm shadow-md' src={mainImage} alt='images'/>
        <div className='flex flex-row flex-wrap justify-around shadow-md p-1 sm:gap-2 my-2'>
        {
            images.map((image,index)=>{
            return <img 
            key={index} 
            className={`${image===mainImage && 'border-4'} h-[5vh] w-[4rem] sm:h-[15vh] sm:w-[8rem] md:h-[14vh] object-fit p-[0.2rem] rounded-md hover:border-2 cursor-pointer border-blue`} 
            onClick={()=>setMainImage(images[index||0])} 
            src={image} alt={`image-${index}`}/>
            })
        }
        </div>
    </div>
    )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function ErrorPage() {
  const navigate=useNavigate();
  return (
    <div className="container flex flex-col items-center justify-center h-[80vh]">
      <h2 className="mt-2 w-[50%] text-center text-xs sm:text-sm md:text-base font-semibold">Sorry,Your Product is not listed.</h2>
      <button onClick={()=>navigate('/')} className=' px-2 py-1 mt-5 rounded-md text-white transition ease-in-out delay-150 bg-darkRed hover:-translate-y-1 hover:scale-110 hover:bg-green duration-300'>Back Home</button>
    </div>
  )
}

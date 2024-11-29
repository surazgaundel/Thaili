import { useEffect } from 'react'
import { useParams,Link } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext'
import { single_product_url as url } from '../utils/component';
import { priceFormat,mrpPrice } from '../utils/helper';
import Stars from '../components/RatingStar';
import ImageList from '../components/ImageList';
import AddToCart from '../components/AddToCart';
export default function SingleProductPage() {
  const {id}=useParams();

  const {singleProduct,fetchSingleProduct}=useProductContext();


  useEffect(()=>{
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  // console.log(singleProduct);
  const {title,price,description,stock,rating,discountPercentage,id:pId,brand,images}=singleProduct;


  return (
    <div className="lg:h-[80vh]">
      <div className="m-4">
      <Link to='/' className="hover-btn uppercase border-b-4 border-red">All Products</Link>
      </div>
      <div className="flex flex-col w-[96%] m-auto lg:flex-row my-3 gap-2 justify-around">
        <div className="lg:w-[50%]">
          {images && <ImageList images={images}/>}
      </div>
      <section className="flex flex-col w-[80%] lg:w-[50%] m-auto">
        <h2 className="font-bold text-2xl md:text-4xl capitalize tracking-wider">{title}</h2>
        <Stars rating={rating}/>
        <section className='flex gap-2 items-center'>
          <p className='text-xl'>{priceFormat(price)}</p>
          <p className='text-sm md:text-base line-through opacity-60'>MRP:{mrpPrice(price,discountPercentage)}</p>
          <p className='text-xs md:text-base'>{discountPercentage} %</p>
        </section>
        <p className='w-[96%] md:w-[80%] mb-5'>{description}</p>
        <p >
          <span className='w-5 font-bold'>Available:</span>{stock>0?'In Stock':'Out Of Stock'}
        </p>
        <p className='capitalize'>
          <span className='font-bold'>Brand:</span>{brand}</p>
        <div className='my-3'>
        {stock && <AddToCart product={singleProduct}/>}
        </div>
      </section>
    </div>
    </div>
  )
}

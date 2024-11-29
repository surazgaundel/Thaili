import { createContext, useEffect, useReducer, useContext } from "react";
import { products_url as url } from '../utils/component'
import reducer from "../reducer/ProductReducer";



const initialState={
    allProducts:[],
    singleProduct:{},
    cartItem:[],
    categoryProduct:[],
    totalAmount:0,
    categories:'all',
}

const productContext=createContext();

export const useProductContext=()=>{
    return(useContext(productContext))
}

export const ProductProvider=({children})=>{
    const[state,dispatch] = useReducer(reducer,initialState);

    //fetch allProducts
    const fetchProducts=async(url)=>{
        try{
            const response=await fetch(url);
            const data=await response.json();
            dispatch({type:'ALL_PRODUCTS',payload:data.products})
        }
        catch(error){
            console.log('Error',error);
        }
    }

    useEffect(()=>{
        fetchProducts(url);
    },[])


    //get single product.
    const fetchSingleProduct=async(url)=>{
        try{
            const response=await fetch(url);
            const data=await response.json();
            dispatch({type:'SINGLE_PRODUCT',payload:data})
        }
        catch(error){
            console.log('Error',error);
        }
    }


    //add to cart
    const  addToCart=(id,amount,product)=>{
        dispatch({type:'ADD_TO_CART',payload:{id,amount,product}});
    }

    //remove item
    const removeItem=(id)=>{
        dispatch({type:'REMOVE_CART_ITEM',payload:id}) 
    }
    //increase or decrease item count
    const toggleCount=(id,value)=>{
        dispatch({type:'TOGGLE_CART_ITEM_COUNT',payload:{id,value}})
    }
    //clear cart
    const clearCart=()=>{
        dispatch({type:'CLEAR_CART'})
    }

    //filterProduct
    const filterProduct=()=>{
        dispatch({type:'FILTER_PRODUCT'})
    }

    useEffect(()=>{
        filterProduct();
    },[state.categories])

    //update products based on category
    const updateProducts=(e)=>{
        let value=e.target.textContent;
        dispatch({type:'UPDATE_PRODUCTS',payload:{value}})
    }

    return(
    <productContext.Provider value={{...state,fetchSingleProduct,addToCart,removeItem,toggleCount,updateProducts,clearCart}}>
        {children}
    </productContext.Provider>
    )
}
/* eslint-disable no-case-declarations */


const reducer=(state,action)=>{
    switch(action.type){
        //product reducer
        case 'ALL_PRODUCTS':
            return{...state,allProducts:action.payload,categoryProduct:action.payload}
        case 'SINGLE_PRODUCT':
            return {...state ,singleProduct: action.payload }
        
        //cart reducer
        case 'ADD_TO_CART':
            const {id,amount,product}=action.payload;
            const tempItem=state.cartItem.find((item)=>item.id=== id)
            //this functionality add the item in cart if the item is already present
            if(tempItem){
                const tempCart=state.cartItem.map(item=>{
                    console.log(item)
                    if(item.id===id){
                        let newAmount=item.amount+amount;
                        if(newAmount>item.max){
                            newAmount=item.max;
                        }
                        return {...item,amount:newAmount}
                    }
                    else{
                        return item;
                    }
                })
                return {...state,cartItem:tempCart}
            }
            else{
                //this functionality add a cart if item is new item
                const newItem={
                    id:id,
                    title:product.title,
                    amount,
                    image:product.images[0],
                    price:product.price,
                    max:product.stock
                    
                }
                return {...state,cartItem:[...state.cartItem,newItem]}
            }
        case 'REMOVE_CART_ITEM':
            return {...state,cartItem:state.cartItem.filter((item)=>item.id!==action.payload)}
        case 'CLEAR_CART':
            return {...state,cartItem:[]}

        //category reducer
        case 'FILTER_PRODUCT':
            const {allProducts,categories} = state;
            let tempArray=[...allProducts];

            if(categories!=='all'){
                tempArray=tempArray.filter((product)=>{
                    return(product.category=== categories)
                })
            }
            return {...state,categoryProduct:tempArray}
        case 'UPDATE_PRODUCTS':
            const {value}=action.payload;
            return {...state,categories:value}
        default:
            return {...state}
    }
}

export default reducer;
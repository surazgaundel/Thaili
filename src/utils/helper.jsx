
export const priceFormat=(price)=>{
    const newPrice=Intl.NumberFormat('en-NP',{
        style:'currency', currency: 'NPR' }).format(price);
    return newPrice;
}

export const mrpPrice=(price,discount)=>{
    const discountedPrice=(discount/100)*price;
    return (price+discountedPrice).toFixed(2);
}
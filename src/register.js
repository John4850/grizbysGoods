export function findProduct(products, code) {
    

    //loop array
    for(let i = 0; i < products.length; i++) {
        const product = products[i];
    }
        //check code against products.code
    if(product.code === code) {
        return foundProduct;
    }
            //if true, return foundProduct
                //if false, keep going
    //end loop
    return null;
}
export function calcLineTotal(quantity, price) {
    return (quantity * price).toFixed(2);
}
export function calcOrderTotal(cart, products) {
    
}
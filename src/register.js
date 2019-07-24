export function findProduct(products, code) {

    //loop array
    for(let i = 0; i < products.length; i++) {
        const foundProduct = products[i];
    
        if(foundProduct.code === code) {
            return foundProduct;
        }
            //if true, return foundProduct
                //if false, keep going
                //end loop
    }
    return null;
}

export function calcLineTotal(quantity, price) {
    return (quantity * price).toFixed(2);
}
export function calcOrderTotal(cart) {
    let grandTotal = 0;
    for(let i = 0; i < cart.length; i++) {
        grandTotal = calcLineTotal(cart[i]);
        
        console.log(grandTotal);
    }

    return grandTotal;
}
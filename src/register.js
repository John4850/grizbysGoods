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
    let totaledLine = (quantity * price).toFixed(2);
    return parseFloat(totaledLine);
}
export function calcOrderTotal(cart, products) {
    let grandTotal = 0;
    for(let i = 0; i < cart.length; i++) {

        let cartProducts = cart[i].code;
        let cartQuantity = cart[i].quantity;
        let foundInCart = findProduct(products, cartProducts);
        let totaledLine = calcLineTotal(cartQuantity, foundInCart.price);
        grandTotal += totaledLine;
    }
    return grandTotal;
}
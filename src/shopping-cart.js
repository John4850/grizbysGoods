import cart from './static-order.js'
import products from './products.js';
import { calcOrderTotal, findProduct } from './register.js';
import renderLineItem from './cart-renderer.js';

//loops through cart, generates table rows
const tbody = document.querySelector('tbody');
for(let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const product = findProduct(products, cartItem.code);
    const row = renderLineItem(cartItem, product);

    tbody.appendChild(row);
}

//calculate the order total
const grandTotal = calcOrderTotal(cart, products);
const tfoot = document.querySelector('tfoot');
tfoot.textContent = 'Grand Total = ' + grandTotal;


//append order total to total cell
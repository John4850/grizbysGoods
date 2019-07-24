import products from './product-renderer.js';
import { calcLineTotal, calcOrderTotal, findProduct } from './register.js';
import cart from './shopping-cart.js';


// findProduct(cart);
// calcLineTotal(cart, quantity);
// calcOrderTotal(cart, products);

function renderCart(cart) {

    //generate a table with found values and qty
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    for(let i = 0; i < cart.length; i++) {
        td.textContent = cart[i].code;
        console.log(td);
    
    }
    
    return tr;
    

}
export default renderCart;
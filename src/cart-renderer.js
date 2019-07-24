import products from './product-renderer.js';
import { calcLineTotal, calcOrderTotal, findProduct } from './register.js';
import cart from './shopping-cart.js';


// findProduct(cart);
// calcLineTotal(cart, quantity);
// calcOrderTotal(cart, products);

function renderCart(cart) {
    
    //generate a table with found values and qty
    const tr = document.createElement('tr');
    return tr;
    
    const tbody = document.createElement('tbody');
    tbody.textContent = cart.name;
    tbody.appendChild(name);

}
export default renderCart;



        //run calcLineTotal on each line of cart.
            //run calcOrderTotal on cart
//display values on HTML
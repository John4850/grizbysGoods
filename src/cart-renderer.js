import products from './product-renderer.js';
import { calcLineTotal, calcOrderTotal, findProduct } from './register.js';
import cart from './shopping-cart.js';


// findProduct(cart);
// calcLineTotal(cart, quantity);
// calcOrderTotal(cart, products);

function renderCart(cart) {
    const tr = document.createElement('tr');
    return tr;
    

}
export default renderCart;



//generate a table with found values and qty
        //run calcLineTotal on each line of cart.
            //run calcOrderTotal on cart
//display values on HTML
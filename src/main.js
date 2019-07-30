import renderProduct from './product-renderer.js';
import store from './store.js';

const products = store.getProducts();
const list = document.getElementById('products');
const products = store.getProducts();

for(let i = 0; i < products.length; i++) {
    const item = products[i];
    const dom = renderProduct(item);
    list.appendChild(dom);
}
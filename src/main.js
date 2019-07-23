import renderProduct from '../src/product-renderer.js';
import products from '../src/products.js';

const list = document.getElementById('products');

for(let i = 0; i < products.length; i++) {
    const item = products[i];
    const dom = renderProduct(item);
    list.appendChild(dom);
}
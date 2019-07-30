import products from './products.js';
import { findProduct } from '../src/register.js';

const SHOPPING_CART_KEY = 'shopping-cart';
const PRODUCT_KEY = 'products';
const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let items = store.get('items');
        if(!items){
            store.save(items, products);
        }
        return products;
    },
    getProduct(code) {
        const products = store.getProducts();
        const product = findProduct(products, code);
        return product;
    },
    addProduct(product) {
        const products = store.getProducts();
        products.push(product);
        store.save(PRODUCT_KEY, product);
    },    
    getShoppingCart() {
        let shoppingCart = store.get(SHOPPING_CART_KEY);
        if(!shoppingCart) {
            shoppingCart = [];
        }
        return shoppingCart;
    },
    orderProduct(code) {
        const shoppingCart = store.getShoppingCart();
        const lineItem = findProduct(shoppingCart, code);
        if(lineItem) {
            lineItem.quantity++;
        }
        else {
            const lineItem = {
                code: code,
                quantity: 1
            };
        //sends to cart
            shoppingCart.push(lineItem);
        }
        //saves the cart
        store.save(SHOPPING_CART_KEY, shoppingCart);
    }
};
export default store;
import store from '../src/store.js';
import products from '../src/products.js';
import renderProduct from '../src/product-renderer.js';

const test = QUnit.test;
QUnit.module('Data Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test ('test get and save data to store', assert => {
//arrange
    const key = 'grenade';
    const item1 = { name: 'grenade' };
//act
    store.save(key, item1);
    const got = store.get(key);
//assert
    assert.deepEqual(got, item1);
}); 

test ('test that get products returns product list', assert => {
    //arrange
    const items = store.getProducts();
    //assert
    assert.deepEqual(items, products);
});

test('Get shopping cart, if none exists, create one.', assert => {
//arrange
    const shoppingCart = store.getShoppingCart();
//test
    assert.deepEqual(shoppingCart, []);
});
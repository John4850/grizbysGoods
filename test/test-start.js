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

test('Adds item to Shopping cart, or updates qty', assert => {
    const code = 'grenade';
    const expected = [{
        code: 'grenade',
        quantity: 1
    }];
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();

    assert.deepEqual(shoppingCart, expected);
    console.log(shoppingCart);

});

test('Confirms QTY updates if ordering multiple items', assert => {
    const code = 'grenade';
    const expected = [{
        code: 'grenade',
        quantity: 2
    }];
    store.orderProduct(code);
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();

    assert.deepEqual(shoppingCart, expected);
    console.log(shoppingCart);
});
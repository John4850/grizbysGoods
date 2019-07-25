import store from '../src/store.js';
import products from '../src/products.js';

const test = QUnit.test;
QUnit.module('Data Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test ('test get and save data to store', assert => {
//arrange
    const key = 'thing1';
    const thing1 = { name: 'gotThing' };
//act
    store.save(key, thing1);
    const got = store.get(key);
//assert
    assert.deepEqual(got, thing1);
}); 

test ('test that get products returns product list', assert => {
    const items = store.getProducts();

    assert.deepEqual(items, products);

});
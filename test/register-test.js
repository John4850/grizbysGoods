import renderProduct from '../src/product-renderer.js';
import products from '../src/products.js';
import { findProduct } from '../src/register.js';

const test = QUnit.test;
QUnit.module('Render Product');

const bomb = {
    code: 'bomb',
    name: 'Goblin Bomb',
    image: 'assets.goblinBomb.jpg',
    description: 'Great for problems Near and Far',
    category: 'ranged',
    price: 200.00,
    cost: 50.00,
};

test('find product by code' assert => {


//arrange

//act
const foundProduct = findProduct(products, code);
//assert

assert.deepEqual(foundProduct, expected);
});

test('calculate line total', (assert) => {
    const price = 200;
    const quantity = 3;
    const expected = quantity * price;

    const total = calcLineTotal(quantity, price);
});
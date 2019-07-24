import products from '../src/products.js';
import { findProduct, calcLineTotal, calcOrderTotal } from '../src/register.js';
import cart from './order.js';

const test = QUnit.test;
QUnit.module('Render Product');


test('find product by code', assert => {

    const code = 'bomb';
    const expected = {
        code: 'bomb',
        name: 'Goblin Bomb',
        image: '../assets/goblinBomb.jpg',
        description: 'Great for problems Near and Far',
        category: 'ranged',
        price: 200.00,
        cost: 50.00,
    };

//act
    const foundProduct = findProduct(products, code);
//assert

    assert.deepEqual(foundProduct, expected);
});

test('calculate line total', assert => {
    
    const price = 200;
    const quantity = 3;
    const expected = 600;

    const total = calcLineTotal(quantity, price);

    assert.equal(total, expected);
});
test('calculate order total', assert => {
    
    const total = calcOrderTotal(cart);
    const expected = 290;


    assert.equal (total, expected);
});
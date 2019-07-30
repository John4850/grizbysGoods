import products from '../src/products.js';
import { findProduct, calcLineTotal, calcOrderTotal } from '../src/register.js';
import renderLineItem from '../src/cart-renderer.js';

const test = QUnit.test;
QUnit.module('Render Product');


test('find product by code', assert => {

    const code = 'bomb';
    const expected = {
        code: 'bomb',
        name: 'Goblin Bomb',
        image: 'assets/goblinBomb.jpg',
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
    
    const price = 200.00;
    const quantity = 3;
    const expected = 600.00;

    const total = calcLineTotal(quantity, price);

    assert.equal(total, expected);
});
test('calculate order total', assert => {
    const cart = [{
        code: 'bomb',
        quantity: 2,
        price: 200.00,
    }, {
        code: 'grenade',
        quantity: 1,
        price: 50.00,
    }];
    
    const grandTotal = calcOrderTotal(cart, products);
    const expected = 450;


    assert.equal (grandTotal, expected);
});
test('Renders Shopping Cart with Names', assert => {
    const cartItem = {
        code: 'bomb',
        quantity: 2,
    };
    //expected is one row table 
    const product = {
        code: 'bomb',
        name: 'Goblin Bomb',
        image:'goblinBomb.jpg',
        description: 'Great for problems Near and Far',
        category: 'ranged',
        price: 200.00,
        cost: 50.00,
    };
    const expected = '<tr><td>Goblin Bomb</td><td>2</td><td>200</td><td>400</td></tr>';



    //use a renderLineItem function instead
    const dom = renderLineItem(cartItem, product);
    const html = dom.outerHTML;

    assert.deepEqual(html, expected);
});
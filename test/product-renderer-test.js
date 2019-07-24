import renderProduct from '../src/product-renderer.js';

const test = QUnit.test;
QUnit.module('Render Product');

test('renders a product', assert => {
    const bomb = {
        code: 'bomb',
        name: 'Goblin Bomb',
        image: '../assets/goblinBomb.jpg',
        description: 'Great for problems Near and Far',
        category: 'ranged',
        price: 200.00,
        cost: 50.00,
    };
    const expected = '<li class="ranged" title="Great for problems Near and Far"><h3>Goblin Bomb</h3><img src="../assets/goblinBomb.jpg" alt="Goblin Bomb image"><p class="price">$200.00<button value="bomb">Add</button></p></li>';
    const dom = renderProduct(bomb);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});
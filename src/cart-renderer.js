import products from './product-renderer.js';
import { calcLineTotal, calcOrderTotal, findProduct } from './register.js';

function renderLineItem(cartItem, product) {
    const tr = document.createElement('tr');
    //name
    const nameCell = document.createElement('td');
    nameCell.textContent = product.name;
    tr.appendChild(nameCell);

    //quauntity
    const quantityCell = document.createElement('td');
    quantityCell.textContent = cartItem.quantity;
    tr.appendChild(quantityCell);

    //price
    const priceCell = document.createElement('td');
    priceCell.textContent = product.price;
    tr.appendChild(priceCell);

    //total
    const totalCell = document.createElement('td');
    const total = calcLineTotal(cartItem.quantity, product.price);
    totalCell.textContent = total;
    tr.appendChild(totalCell);    
    return tr;
}
export default renderLineItem;
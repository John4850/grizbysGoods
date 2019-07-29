import store from "./store.js";


function renderProduct(products) {
    const li = document.createElement('li');
    li.className = products.category;
    li.title = products.description;

    const h3 = document.createElement('h3');
    h3.textContent = products.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = products.image;
    img.alt = products.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    li.appendChild(p);

    const usd = products.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const button = document.createElement('button');
    button.textContent = 'Buy';
    button.value = products.code;
    button.addEventListener('click', () => {
        store.orderProduct(products.code);
        alert('Product Ordered!');
    });

    p.appendChild(button);

    return li;
}
export default renderProduct;
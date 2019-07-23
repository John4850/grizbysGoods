
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


    return li;
}
export default renderProduct;
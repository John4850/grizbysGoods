import store from '../src/store.js';

const form = document.getElementById('add-product');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const product = {
        code: formData.get('code'),
        name: formData.get('name'),
        image: formData.get('IMG'),
        category: formData.get('category'),
        price: +formData.get('price'),
        description: formData.get('description'),
    };

    store.addProduct(product);
    alert('Product Added');

});

form.reset();

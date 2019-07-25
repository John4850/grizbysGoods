import products from './products.js';


const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let items = store.get('items');
        if(!items){
            store.save('items', products);
        }
        return products;
    }
    
};

export default store;

export const getCart = () => {
    return new Promise((resolve,rej) =>{
        const cart = window.localStorage.getItem('cart');
        resolve(cart);
    })
    

}

export const storeCart = (cart) => {
    window.localStorage.setItem('cart', JSON.stringify(cart));

}



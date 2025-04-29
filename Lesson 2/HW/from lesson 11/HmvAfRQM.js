"use strict";
// let cartsDiv = document.getElementById('carts-conteiner');
let cartsDiv = document.createElement("div");
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((cartsObj) => {
    const { carts } = cartsObj;
    for (const cart of carts) {
        let divCart = document.createElement('div');
        divCart.classList.add('cart');
        let cartInfo = document.createElement('div');
        cartInfo.classList.add('cartInfo');
        cartInfo.innerText = `
                        "id": ${cart.id}
                        "total": ${cart.total},
                        "discountedTotal": ${cart.discountedTotal},
                        "userId": ${cart.userId},
                        "totalProducts": ${cart.totalProducts},
                        "totalQuantity": ${cart.totalQuantity}
                    `;
        for (const product of cart.products) {
            let ol = document.createElement('ol');
            ol.innerText = `
                              "id": ${product.id},
                              "title": ${product.title},
                              "price": ${product.price},
                              "quantity": ${product.quantity},
                              "total": ${product.total},
                              "discountPercentage": ${product.discountPercentage},
                              "discountedTotal": ${product.discountedTotal},
                        `;
            let img = document.createElement('img');
            img.src = product.thumbnail;
            ol.appendChild(img);
            cartInfo.append(ol);
        }
        divCart.appendChild(cartInfo);
        cartsDiv.appendChild(divCart);
    }
});

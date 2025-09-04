'use strict';

const itemAdd = document.querySelector('[data-action="add"]');
const itemRemove = document.querySelector('[data-action="remove"]');
const itemCounter = document.querySelector('[data-counter]');
let cartList = document.querySelector('.cart__list');
const basketCounter = document.querySelector('.cart__btn-counter');

if (itemAdd) {
    itemAdd.addEventListener('click', function () {
        itemCounter.innerText++;
    });
    itemRemove.addEventListener('click', function () {

        if (parseInt(itemCounter.innerText) > 1) {
            itemCounter.innerText = --itemCounter.innerText;
        }

    });
}

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        const product = event.target.closest('.product');
        basketCounter.innerText = Number(itemCounter.innerText) + Number(basketCounter.innerText);
        basketCounter.classList.remove('hidden');
        localStorage.setItem("basketCounter", basketCounter.innerText);


        const productInfo = {
            id: product.dataset.id,
            imgSrc: product.querySelector('.product__image-01 > img').getAttribute('src'),
            title: product.querySelector('.product__title').innerText,
            price: product.querySelector('.product__price-main').innerText,
            size: product.querySelector('.product__size-item.active').innerText,
            color: product.querySelector('.product__color-item.active > p').innerText,
            counter: itemCounter.innerText,
        }

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if product with same id + size + color exists
        let existingItem = cart.find(item =>
            item.id === productInfo.id &&
            item.size === productInfo.size &&
            item.color === productInfo.color
        );

        if (existingItem) {
            existingItem.counter = Number(productInfo.counter) + Number(existingItem.counter);
        } else {
            cart.push(productInfo);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        console.log(cart);

    }
});

function renderCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.querySelector(".cart__list");
    cartContainer.innerHTML = "";

    // for (let i = 0; i < cart.length; i++) {

    //     cartContainer.innerHTML += `<li class="cart__item" data-item-${i}>
    //     <a href="#" class="cart__item-image">
    //     <img src="${cart[i].imgSrc}" alt="image of t-shirt"></a>
    //     <div class="cart__item-info">
    //     <h2 class="cart__item-title">${cart[i].title}</h2>
    //     <div class="cart__item-size">
    //        Size: <span>${cart[i].size}</span>
    //     </div>
    //     <div class="cart__item-color">
    //         Color: <span>${cart[i].color}</span>
    //     </div>
    //     <div class="cart__item-price">${cart[i].price}</div>
    //  </div>
    //  <div onclick="removeFromCart()" class="cart__item-remove">
    //      <span class="icon-garbage"></span>
    //  </div>
    //  <div class="cart__item-quantity product__cart-quantity">
    //     <div class="cart__item-substract product__cart-substract"></div>
    //     <div class="cart__item-total product__cart-total">${cart[i].counter}</div>
    //  <div class="cart__item-add product__cart-add"></div>
    //  </div></li>`;
    // }
    cart.forEach(item => {
        cartContainer.innerHTML += `<li class="cart__item">
        <a href="#" class="cart__item-image">
        <img src="${item.imgSrc}" alt="image of t-shirt"></a>
        <div class="cart__item-info">
        <h2 class="cart__item-title">${item.title}</h2>
        <div class="cart__item-size">
           Size: <span>${item.size}</span>
        </div>
        <div class="cart__item-color">
            Color: <span>${item.color}</span>
        </div>
        <div class="cart__item-price">${item.price}</div>
     </div>
     <div onclick="removeCartItem('${item.id}', '${item.size}', '${item.color}')" class="cart__item-remove">
         <span class="icon-garbage"></span>
     </div>
     <div class="cart__item-quantity product__cart-quantity">
        <div class="cart__item-substract product__cart-substract"></div>
        <div class="cart__item-total product__cart-total">${item.counter}</div>
     <div class="cart__item-add product__cart-add"></div>
     </div></li>`;
    });

    // Update basket counter
    const totalItems = cart.reduce((sum, item) => Number(sum) + Number(item.counter), 0);
    const basketCounter = document.querySelector(".cart__btn-counter");
    basketCounter.innerText = totalItems;
    if (totalItems === 0) basketCounter.classList.add("hidden");
    localStorage.setItem("basketCounter", totalItems);
}

if (cartList) {
    renderCart();
}

// Remove items from cart
function removeCartItem(id, size, color) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => !(item.id === id && item.size === size && item.color === color));
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}


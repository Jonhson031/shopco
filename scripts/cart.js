'use strict';

const itemAdd = document.querySelector('[data-action="add"]');
const itemRemove = document.querySelector('[data-action="remove"]');
const itemCounter = document.querySelector('[data-counter]');
let cartList = document.querySelector('.cart__list');
const basketCounter = document.querySelector('.cart__btn-counter');

let basket = JSON.parse(localStorage.getItem("data")) || [];

itemRemove.addEventListener('click', function () {

    if (parseInt(itemCounter.innerText) > 1) {
        itemCounter.innerText = --itemCounter.innerText;
    }

});
itemAdd.addEventListener('click', function () {
    itemCounter.innerText++;
});


window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        const product = event.target.closest('.product');


        basketCounter.innerText = itemCounter.innerText;
        basketCounter.classList.remove('hidden');
        const productInfo = {
            id: product.dataset.id,
            imgSrc: product.querySelector('.product__image-01 > img').getAttribute('src'),
            title: product.querySelector('.product__title').innerText,
            price: product.querySelector('.product__price-main').innerText,
            size: product.querySelector('.product__size-item--active').innerText,
            color: product.querySelector('.product__color-item--active > p').innerText,
            counter: itemCounter.innerText,
        }
        const cartItemHTML = `<li class="cart__item">
      <a href="#" class="cart__item-image">
      <img src="${productInfo.imgSrc}" alt="image of t-shirt"></a>
      <div class="cart__item-info">
      <h2 class="cart__item-title">${productInfo.title}</h2>
      <div class="cart__item-size">
         Size: <span>${productInfo.size}</span>
      </div>
      <div class="cart__item-color">
          Color: <span>${productInfo.color}</span>
      </div>
      <div class="cart__item-price">${productInfo.price}</div>
   </div>
   <div class="cart__item-remove">
       <span class="icon-garbage"></span>
   </div>
   <div class="cart__item-quantity product__cart-quantity">
      <div class="cart__item-substract product__cart-substract"></div>
      <div class="cart__item-total product__cart-total">1</div>
   <div class="cart__item-add product__cart-add"></div>
   </div></li>`;
        //  cartList.insertAdjacentHTML('beforeend', cartItemHTML);
        localStorage.setItem("data", JSON.stringify(cartItemHTML));
        cartList.insertAdjacentHTML('beforeend', basket);
    }
});
console.log(basket);

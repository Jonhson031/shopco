"use strict";
// Sign Up close button
const signupClose = document.querySelector('.sign-up__close');
const signup = document.querySelector('.sign-up');
if (signup) {
   signupClose.addEventListener('click', function () {
      signup.classList.toggle('hidden');
   });
}
// Sign Up page

const signupBtn = document.querySelector('.login__form-question');
const loginContainer = document.querySelector('.login__container');
const loginBtn = document.querySelector('.signup__form-question');
const signupContainer = document.querySelector('.signup__container');
if (signupContainer){
   signupBtn.addEventListener('click', function () {
      loginContainer.classList.add('hidden');
      signupContainer.classList.remove('hidden');
   });
   loginBtn.addEventListener('click', function () {
      signupContainer.classList.add('hidden');
      loginContainer.classList.remove('hidden');
   });
}

// Burger menu
const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.header__list');
const burgerLink = document.querySelectorAll('.header__link');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.header__close')
if (burgerBtn) {
   burgerBtn.addEventListener('click', function () {
      document.body.classList.toggle('lock');
      burgerBtn.classList.toggle('active');
      burgerMenu.classList.toggle('active');
      overlay.classList.toggle('active');
      closeBtn.classList.toggle('active');
   })
}
function removeActive() { // works for burger menu, drop down menu, filter.
   burgerBtn.classList.remove('active');
   burgerMenu.classList.remove('active');
   overlay.classList.remove('active');
   document.body.classList.remove('lock');
   dropdown.classList.remove('active');
   dropdownOpen.classList.remove('active');
   closeBtn.classList.remove('active');
   filter.classList.remove('active');
   closeFilter.classList.remove('active');
   overlayFilter.classList.remove('active');
}
for (let i = 1; i < burgerLink.length; i++) {
   burgerLink[i].addEventListener('click', removeActive)
}
overlay.addEventListener('click', removeActive);
closeBtn.addEventListener('click', removeActive);

// Slider Swapper
const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   spaceBetween: 20,
   // If we need pagination
   // pagination: {
   //   el: '.swiper-pagination',
   // },
   // Navigation arrows
   navigation: {
      nextEl: '.reviews__arrow-right',
      prevEl: '.reviews__arrow-left',
   },

   // And if we need scrollbar
   // scrollbar: {
   //   el: '.swiper-scrollbar',
   // },

   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      767: {
         slidesPerView: 2,
      },
      1023: {
         slidesPerView: 3,
      }
   }
});

// DropDown Menu
const dropdown = document.querySelector('.dropdown');
const dropdownOpen = document.querySelector('.dropdown__open');
const dropdownLink = document.querySelectorAll('.dropdown__link');
if (dropdownOpen) {
   dropdownOpen.addEventListener('click', function () {
      dropdown.classList.toggle('active');
      dropdownOpen.classList.toggle('active');
      for (let i = 0; i < dropdownLink.length; i++) {
         dropdownLink[i].classList.toggle('active');
      }
   })
}

// Tabs
let tabs = document.querySelectorAll(".tabs__button");
let tabContents = document.querySelectorAll(".tabs__content");
if (tabs) {
   tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
         tabContents.forEach((content) => {
            content.classList.remove("active");
         });
         tabs.forEach((tab) => {
            tab.classList.remove("active");
         });
         tabContents[index].classList.add("active");
         tabs[index].classList.add("active");
      });
   });
}
// Filter Sort (Reviews)
const filterSort = document.querySelector('.product-reviews__filter-sort, .casual__sort');
const filterList = document.querySelector('.product-reviews__filter-list, .casual__sort-list');
const filterSortItem = document.querySelectorAll('.product-reviews__filter-item, .casual__sort-item');
if (filterSort) {
   filterSort.addEventListener('click', function () {
      filterSort.classList.toggle('active');
   })
}
// // Modal Window

const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const overlayModal = document.querySelector('.overlay-modal');

if (modal) {
   for (let i = 0; i < openModal.length; i++) {
      openModal[i].addEventListener('click', function () {
         document.body.classList.add('lock');
         modal.classList.remove('hidden');
         overlayModal.classList.remove('hidden');
      });
   }

   const addHidden = function () {
      modal.classList.add('hidden');
      overlayModal.classList.add('hidden');
      document.body.classList.remove('lock');
   }

   closeModal.addEventListener('click', addHidden);
   overlayModal.addEventListener('click', addHidden);

   document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
         addHidden();
      }
   });
}


// Load more reviews
const reviewsBlock = document.querySelectorAll('.product-reviews__block');
const reviewsBtn = document.querySelector('.product-reviews__button ');
if (reviewsBtn) {
   reviewsBtn.addEventListener('click', function () {
      for (let i = 6; i < reviewsBlock.length; i++) {
         reviewsBlock[i].classList.toggle('hidden');
         if (!reviewsBlock[i].classList.contains('hidden')) {
            reviewsBtn.textContent = 'Show Less Reviews';
         } else {
            reviewsBtn.textContent = 'Load More Reviews';
         }
      }

   })
}


// Filter menu
const openFilter = document.querySelector('.filter__open');
const filter = document.querySelector('.filter');
const closeFilter = document.querySelector('.filter__close');
const overlayFilter = document.querySelector('.overlay-filter');
if (filter) {
   openFilter.addEventListener('click', function () {
      document.body.classList.toggle('lock');
      filter.classList.toggle('active');
      overlayFilter.classList.toggle('active');
      closeFilter.classList.toggle('active');
   });

   closeFilter.addEventListener('click', removeActive);
   overlayFilter.addEventListener('click', removeActive);

}


// Stars Rating
const stars = document.querySelectorAll('.modal__rating-stars span');
if (stars){
   stars.forEach((star, index1) => {
      star.addEventListener("click", function () {
   
         stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');
         });
      });
   });
}

// Choose color, size of product
const productSize = document.querySelectorAll('.product__size-item, .filter__size-item');
if (productSize) {
   productSize.forEach((size, index1) => {
      size.addEventListener('click', function () {
         productSize.forEach((size, index2) => {
            index1 == index2 ? size.classList.add('active') : size.classList.remove('active');
         });
      });
   });
}
const productColor = document.querySelectorAll('.product__color-item, .filter__colors-item');
if (productColor) {
   productColor.forEach((color, index1) => {
      color.addEventListener('click', function () {
         productColor.forEach((color, index2) => {
            index1 == index2 ? color.classList.add('active') : color.classList.remove('active');
         });
      });
   });
}

// Changing main image
const productImage = document.querySelectorAll('.product__image');
const productMainImage = document.querySelector('.product__image-main img');
if (productImage) {
   productImage.forEach((image, index1) => {
      image.addEventListener('click', function () {
         let imgSource = image.querySelector('img').getAttribute('src');
         productMainImage.setAttribute('src', imgSource);
         productImage.forEach((image, index2) => {
            index1 == index2 ? image.classList.add('active') : image.classList.remove('active');
         });
      });
   });
}

// Hide Filter Section
const filterHide = document.querySelectorAll('.filter__section > h3');
const filterHidden = document.querySelectorAll('.filter__section');
if (filterHide) {
   filterHide.forEach((filterClick, index1) => {
      filterClick.addEventListener('click', function () {
         filterHidden.forEach((filterHideen, index2) => {
            // index1 == index2 ? filterHideen.classList.toggle('clicked');
            if (index1 == index2) {
               filterHideen.classList.toggle('clicked');
            }
         });

      });
   });
}


document.addEventListener("DOMContentLoaded", () => {
   const savedCounter = localStorage.getItem("basketCounter");
   if (savedCounter && parseInt(savedCounter) > 0) {
     basketCounter.innerText = savedCounter;
     basketCounter.classList.remove("hidden");
   }
 });
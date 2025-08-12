'use strict';

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
const filterSort = document.querySelector('.product-reviews__filter-sort');
const filterList = document.querySelector('.product-reviews__filter-list');
const filterSortItem = document.querySelectorAll('.product-reviews__filter-item');
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
const overlayFilter  = document.querySelector('.overlay-filter');
if (filter) {
   openFilter.addEventListener('click', function () {
      document.body.classList.toggle('lock');
      filter.classList.toggle('active');
      overlayFilter.classList.toggle('active');
      closeFilter.classList.toggle('active');
   });
}
closeFilter.addEventListener('click', removeActive);
overlayFilter.addEventListener('click', removeActive);
'use strict';

const pictures = document.querySelector('.gallery__pictures');
const picture = document.querySelector('.gallery__picture');
const navDots = document.querySelectorAll('.gallery__navigation');

let activeDot = 0;
const picuresGap = getComputedStyle(pictures);
const pictureWidth = picture.clientWidth + parseInt(picuresGap.gap);

navDots.forEach((dot) =>
  dot.addEventListener('click', (event) => {
    navDots.forEach((dot) => {
      dot.classList.remove('gallery__navigation--active');
    });

    if (event.currentTarget.classList.contains('gallery__navigation--1')) {
      event.currentTarget.classList.add('gallery__navigation--active');
      activeDot = 0;
    }

    if (event.currentTarget.classList.contains('gallery__navigation--2')) {
      event.currentTarget.classList.add('gallery__navigation--active');
      activeDot = 1;
    }

    if (event.currentTarget.classList.contains('gallery__navigation--3')) {
      event.currentTarget.classList.add('gallery__navigation--active');
      activeDot = 2;
    }

    if (event.currentTarget.classList.contains('gallery__navigation--4')) {
      event.currentTarget.classList.add('gallery__navigation--active');
      activeDot = 3;
    }

    if (activeDot <= 3) {
      pictures.style.transform = `translateX(-${pictureWidth * activeDot}px)`;
    } else {
      pictures.style.transform = `translateX(${pictureWidth * activeDot}px)`;
    }
  }),
);


const page = document.querySelector('.page__body');
const page_gradient = document.querySelector('.page__gradient');

window.addEventListener('hashchange', () => {
  setTimeout(() => {
    if (window.location.hash === '#menu') {
      page.classList.add('page__disabled');
      page_gradient.style.display = 'block';
    } else {
      page.classList.remove('page__disabled');
      page_gradient.style.display = 'none';
    }
  }, 0);
});

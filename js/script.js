let img1 = document.getElementsByClassName('about-campaign__images')[0].children[0];
let img2 = document.getElementsByClassName('about-campaign__images')[0].children[1];

img1.addEventListener('click', function() {
  img2.classList.remove('first');
  img1.classList.add('first');
})
img2.addEventListener('click', function() {
  img1.classList.remove('first');
  img2.classList.add('first');
})

//------ popular-destinations swiper -----

new Swiper('.popular-destinations__slader', {
  scrollbar: {
    el: '.popular-destinations__scrollbar',
     draggable: true,     
   },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  
  },

});

//------ travel-blog swiper -----

const relizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
  let swiper;

  breakpoint = window.matchMedia(breakpoint);

  const enableSwiper = function(className, settings) {
    swiper  = new Swiper(className, settings);
  }

  const checker = function() {
    if (breakpoint.matches) {
      return enableSwiper(swiperClass, swiperSettings);
    } else {
      if (swiper !== undefined) swiper.destroy(true, true);
      return;
    }
  }

  breakpoint.addEventListener('change', checker);
  checker();
}

relizableSwiper(
  '(max-width: 768px)',
  '.travel-blog__slider',
  {
    scrollbar: {
      el: '.travel-blog__scrollbar',
      draggable: true,       
    },
    spaceBetween: 30, 
    slidesPerView: 1,
  })

relizableSwiper(
  '(max-width: 768px)',
  '.impressions__slider',
  {
    scrollbar: {
      el: '.impressions__scrollbar',
      draggable: true,       
    },
    slidesPerView: 1,
  })

//---------- burger --------------

let btOpenBurger = document.querySelector('.header__burger');
let btCloseBurger = document.querySelector('.burger__close');
let burgerMenu = document.querySelector('.burger');
document.querySelector('.burger__list').innerHTML = document.querySelector('.header__menu').innerHTML;

btOpenBurger.addEventListener('click', function() {
  burgerMenu.classList.add('burger__active');
})

btCloseBurger.addEventListener('click', function() {
  burgerMenu.classList.remove('burger__active');
})
































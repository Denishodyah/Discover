const menu = document.querySelector('.header-nav');
const menuBtn = document.querySelector('.menu-icon');
const body = document.body;
if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
    menu.querySelectorAll('.header-nav__link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active')
                menuBtn.classList.remove('active')
                body.classList.remove('lock')
            })
    })
}
const swiper = new Swiper('.swiper', {
  // Optional parameters
  
loop: true,
autoplay: {
  delay: 2500,
  disableOnInteraction: false,
},
keyboard: {
  enabled: true,
},
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows


  // And if we need scrollbar
  scrollbar: {
    el: '.discover-block__scrollbar',
  },
});
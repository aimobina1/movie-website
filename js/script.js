let header = document.getElementById('nav-sec')
let menu = document.getElementById('menu-icon')
let navbar = document.getElementById('navbar')


window.addEventListener('scroll', () =>{
  header.classList.toggle('shadow', window.scrollY > 0)
} )

menu.onclick = () =>{
  menu.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

window.onscroll = ()=>{
  menu.classList.remove('bx-x')
  navbar.classList.remove('active') 
}
// Initialize Swiper >
      var swiper = new Swiper(".home", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay:5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
      });

// Initialize Swiper for comming movies >
var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay:55000,
      disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints:{
        0:{
            slidesPerView:2,
        },
        568:{
            slidesPerView:3,
        },

        768:{
            slidesPerView:4,
        },
        968:{
            slidesPerView:5,
        },


    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });
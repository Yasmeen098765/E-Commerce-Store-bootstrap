// 1_
// filter products using isotope library:
// init Isotope
var $products = $('.all-products').isotope({
    // options
     originLeft: false
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $products.isotope({ filter: filterValue });
  });
  
  // --------------------------------------------------------------------------------------------------
  // 2_
  // Finally, we need to initialize Swiper in JS:
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction:'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      // mobile
      320: {
        slidesPerView: 2, //two items
        spaceBetween: 20,
      },
      // tab
      640: {
        slidesPerView: 4, //two items
        spaceBetween: 20,
      },
      // computer
      768: {
        slidesPerView: 4, //6 items
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
    },
  });
    // --------------------------------------------------------------------------------------------------

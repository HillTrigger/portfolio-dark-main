$(".header__main-wrapper2").slick({
  arrows: false,
});

$(".header__arrow--left").on("click", function (e) {
  e.preventDefault();
  $(".header__main-wrapper2").slick("slickPrev");
});

$(".header__arrow--right").on("click", function (e) {
  e.preventDefault();
  $(".header__main-wrapper2").slick("slickNext");
});

$(".portfolio__tabs").tabs();
// { show: { effect: "blind", duration: 300 } }
// ====================LOAD-MORE====================== //
// ====================LOAD-MORE====================== //

let loadMoreBtnWeb = document.querySelector(
  ".portfolio__grid-web .portfolio__grid-load"
);
let currentItemWeb = 8;

loadMoreBtnWeb.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(".portfolio__grid-web .portfolio__grid-box"),
  ];
  for (var i = currentItemWeb; i < currentItemWeb + 4; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItemWeb += 4;

  if (currentItemWeb >= boxes.length) {
    loadMoreBtnWeb.style.display = "none";
  }
};

let loadMoreBtnUi = document.querySelector(
  ".portfolio__grid-ui .portfolio__grid-load"
);
let currentItemUi = 8;

loadMoreBtnUi.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(".portfolio__grid-ui .portfolio__grid-box"),
  ];
  for (var i = currentItemUi; i < currentItemUi + 4; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItemUi += 4;

  if (currentItemUi >= boxes.length) {
    loadMoreBtnUi.style.display = "none";
  }
};

// Для секции "proto"
let loadMoreBtnProto = document.querySelector(
  ".portfolio__grid-proto .portfolio__grid-load"
);
let currentItemProto = 8;

loadMoreBtnProto.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(".portfolio__grid-proto .portfolio__grid-box"),
  ];
  for (var i = currentItemProto; i < currentItemProto + 4; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItemProto += 4;

  if (currentItemProto >= boxes.length) {
    loadMoreBtnProto.style.display = "none";
  }
};

// Для секции "photo"
let loadMoreBtnPhoto = document.querySelector(
  ".portfolio__grid-photo .portfolio__grid-load"
);
let currentItemPhoto = 8;

loadMoreBtnPhoto.onclick = () => {
  let boxes = [
    ...document.querySelectorAll(".portfolio__grid-photo .portfolio__grid-box"),
  ];
  for (var i = currentItemPhoto; i < currentItemPhoto + 4; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItemPhoto += 4;

  if (currentItemPhoto >= boxes.length) {
    loadMoreBtnPhoto.style.display = "none";
  }
};


$(document).on("click", ".header__burgerbutton", function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $('.header__navbar').toggleClass('header__navbar--open');
  $('body').css('overflow', function(_, current) {
    return current === 'hidden' ? 'auto' : 'hidden';
  });
});


//prices

$('.prices__main-cards').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  slidesToScroll: 3,
  arrows: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 9999, // при ширине экрана <= 1024px
      settings: "unslick"  // Отключение слайдера
    },
    {
      breakpoint: 900, // при ширине экрана <= 1024px
    },
  ]
});
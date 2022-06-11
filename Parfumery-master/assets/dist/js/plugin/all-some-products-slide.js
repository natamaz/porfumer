$(document).ready(function(){

$('.all-some-products').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<div class='slick-prev2 pull-left slide-style1'>&lsaquo;</div>",
    nextArrow:"<div class='slick-next2 pull-right slide-style2'>&rsaquo;</div>",
    dots: false,
    responsive:[
      {
        breakpoint: 1225,
        settings: {
         slidesToShow: 3,
        }
      },
       {
        breakpoint: 768,
        settings: {
         slidesToShow: 2,
        }
      },
      ]
  });

  $('.all-some-product').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<div class='slick-prev2 pull-left slide-style1'>&lsaquo;</div>",
    nextArrow:"<div class='slick-next2 pull-right slide-style2'>&rsaquo;</div>",
    dots: false,
    responsive:[
       {
        breakpoint: 726,
        settings: {
         slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
         slidesToShow: 2,
        }
      },
      ],
  });

  $('.all-photos').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<div class='slick-prev3 pull-left slide-style1'>&lsaquo;</div>",
    nextArrow:"<div class='slick-next3 pull-right slide-style2'>&rsaquo;</div>",
    dots: false,
  });
});
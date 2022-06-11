$(document).ready(function(){
$('.all-banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
  });

  $('.all-some-products-sale').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<div class='slick-prev3 pull-left slide-style1'>&lsaquo;</div>",
    nextArrow:"<div class='slick-next3 pull-right slide-style2'>&rsaquo;</div>",
    dots: false,
    responsive:[
       {
        breakpoint: 1234,
        settings: {
         slidesToShow: 3,
        }
      },
      ]
  });
});
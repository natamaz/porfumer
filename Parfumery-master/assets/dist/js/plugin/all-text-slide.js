
$(document).ready(function(){
$(".top-title > div > h5").bind("click", function(){
    $(this).parent().parent().parent().parent().find(".all-opens").removeClass().addClass("all-opens");
    $(".top-title > div").removeClass('act');
    $(this).parent().addClass('act');
    var $thisClass = $(this).attr("class");
    var $some = $(this).parent().parent().parent().parent().find(".all-opens").addClass($thisClass + "-show");

    $('.all-text').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:"<div class='slick-prev pull-left slide-style1'>&lsaquo;</div>",
      nextArrow:"<div class='slick-next pull-right slide-style2'>&rsaquo;</div>",
      dots: false,
    });
    });

    $(".video").bind("click", function(){
      $(".video").removeClass('this');
      $(".text").removeClass('this');
      $(this).addClass('this');
      $(this).parent().parent().parent().find('.all-text').css('display','none');
      $(this).parent().parent().parent().find('.all-video').css('display','block');
      $('.all-video').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        prevArrow:"<div class='slick-prev pull-left slide-style1'>&lsaquo;</div>",
        nextArrow:"<div class='slick-next pull-right slide-style2'>&rsaquo;</div>",
        dots: false,
      });
    });

    $('.all-blocksAboutUs').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:"<div class='slick-prev pull-left'>&lsaquo;</div>",
      nextArrow:"<div class='slick-next pull-right'>&rsaquo;</div>",
      dots: false,
      customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a class ="link">'+(i+1)+' <span> /5</span></a>';
        },
      responsive:[
        {
         breakpoint: 1441,
         settings: {
         }
       },
        {
         breakpoint: 1221,
         settings: {
          slidesToShow: 4,
         }
       },
        {
         breakpoint: 900,
         settings: {
          slidesToShow: 3,
         }
       },
        {
         breakpoint: 690,
         settings: {
          slidesToShow: 2,
          dots: false,
         }
       },
        {
         breakpoint: 430,
         settings: {
          slidesToShow: 1,
          dots: true,
         }
       },
       ],
    });
  });
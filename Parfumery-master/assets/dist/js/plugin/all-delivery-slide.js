if ($(window).width() < 1440) {
    $('.all-delivery').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:"<div class='slick-prev pull-left'>&lsaquo;</div>",
      nextArrow:"<div class='slick-next pull-right'>&rsaquo;</div>",
      dots: true,
      customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a class ="link">'+(i+1)+' <span> /5</span></a>';
        },
      responsive:[
         {
          breakpoint: 1024,
          dots: false,
          settings: {
           slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
           slidesToShow: 1,
          }
        },
        ]
    });

    $('.all-pay').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:"<div class='slick-prev pull-left'>&lsaquo;</div>",
      nextArrow:"<div class='slick-next pull-right'>&rsaquo;</div>",
      dots: true,
      customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a class ="link">'+(i+1)+' <span> /5</span></a>';
        },
      responsive:[
         {
          breakpoint: 1024,
          dots: false,
          settings: {
           slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
           slidesToShow: 1,
          }
        },
        ]
    });
  } else {
    $(".all-delivery").slick("unslick");
    $(".all-delivery").slick("unslick");
  }
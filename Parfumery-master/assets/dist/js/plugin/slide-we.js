$(document).ready(function(){      
      $('.slide-we').slick({
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
            breakpoint: 768,
            settings: {
             slidesToShow: 2,
             dots: false,
            }
          },
          {
            breakpoint: 500,
            settings: {
             slidesToShow: 1,
            }
          },
          ]
      });
    });
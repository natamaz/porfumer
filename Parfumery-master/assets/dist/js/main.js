$(document).ready(function(){
    //open menu
    $(".open-nav").bind("click", function(){
        var $someMenu = $('.drop-menu');
        if($someMenu.is(':visible')){
            $someMenu.css('display','none');
        }
        else {
            $someMenu.css('display','block');
        }
      });
      //open search
    $(".open-search").bind("click", function(){
        var $someMenu = $('.drop-search');
        if($someMenu.is(':visible')){
            $someMenu.css('display','none');
        }
        else {
            $someMenu.css('display','block');
        }
      });
      //open-dop-menu
    $(".open-menu-dop").bind("click", function(){
        var someOpenMenuDop = $('.some-drop-menu-dop');
        if(someOpenMenuDop.is(':visible')){
          someOpenMenuDop.css('display','none');
        }
        else {
          someOpenMenuDop.css('display','block');
        }
      });
    $(".plus").bind("click", function(){
        $(this).parent().parent().addClass('open-some-block-faq');
      });
    $(".minus").bind("click", function(){
        $(this).parent().parent().removeClass('open-some-block-faq');
      });

      $(".deleteTovar").bind("click", function(){
        $(this).parent().remove();
      });
      $(".open-thank").bind("click", function(e){
        e.preventDefault();

      });

      $(window).scroll(function() {
          if($(this).scrollTop() != 0) {
          $('.toTop').fadeIn();
          } else {
            $('.toTop').fadeOut();
          }
        });
      $(".toTop").on("click", function (event) {
              event.preventDefault();
              var id  = $(this).attr('href'),
                  top = $(id).offset().top;
              $('body,html').animate({scrollTop: top}, 800);
            });


      $(".quantity-arrow-minus").bind("click", function(){
        var $quantityNum = $(this).parent().parent().find(".quantity-num");
          if ($quantityNum.val() > 1){
            $quantityNum.val(+$quantityNum.val() - 1);
          }
      });
      $(".quantity-arrow-plus").bind("click", function(){
        var $quantityNum = $(this).parent().parent().find(".quantity-num");
          $quantityNum.val(+$quantityNum.val() + 1);
      });

      $(".popUp-mainArea").bind("click", function(){
        $(".popUp").css('display', 'none');
        $(".popUp-mainArea").css('display', 'none');
        $(".personalArea-popUp").css('display', 'none');
        $(".popUp").css('display', 'none');
      });

      $(".close-popUp").bind("click", function(){
        $(".popUp").css('display', 'none');
        $(".popUp-mainArea").css('display', 'none');
        $(".personalArea-popUp").css('display', 'none');
      });

      $(".open-popUp-mainArea").bind("click", function(){
        $(".some-popUp").css('display', 'block');
        $(".popUp-mainArea").css('display', 'block');
      });

      $(".write-we").bind("click", function(){
        $('.some-popUp-ask').css('display','block');
        $(".popUp-mainArea").css('display', 'block');
      });

      $(".category-blocks > p").bind("click", function(){
        $(".category-blocks > p").removeClass('active-cat');
        $(this).toggleClass('active-cat');
      });

      $(".open-thank").bind("click", function(){
        $(".wantOtlivant").css('display', 'none');
        $(".popUp").css('display', 'none');
        $(".popUp-thank").css('display', 'block');
        $(".popUp-surprize").css('display', 'block');
      });

      $(".main-areaPopUp").bind("click", function(){
        $(".personalArea-popUp").css('display', 'block');
        $(".popUp-mainArea").css('display', 'block');
        $(".drop-menu").css('display', 'none');

      });

      $(".headline-select > h4").bind("click", function(){
        $('.loginHeadline').removeClass('active-click');
        $('.registrHeadline').removeClass('active-click');
        $(this).toggleClass('active-click');
      });
      $(".loginHeadline").bind("click", function(){
        $('.login').css('display','block');
        $('.registration').css('display','none');
      });
      $(".registrHeadline").bind("click", function(){
        $('.login').css('display','none');
        $('.registration').css('display','block');
      });

      $(".surprise").bind("click", function(){
        $('.popUp-surprize').css('display','block');
        $('.over').css('display','block');
      });
      $(".open-wantOtl").bind("click", function(){
        $('.popUp-surprize').css('display','block');
        $('.wantOtlivant').css('display','block');
      });
      $(".close-surp").bind("click", function(){
        $('.popUp-surprize').css('display','none');
        $('.over').css('display','none');
      });
      $(".close-pop-basket, .close").bind("click", function(){
        $('.popUp-surprize').css('display','none');
        $('.over').css('display','none');
        $('.wantOtlivant').css('display','none');
      });
      $(".popUp-surprize").bind("click", function(){
        $('.popUp-surprize').css('display','none');
        $('.over').css('display','none');
        $('.wantOtlivant').css('display','none');
        $('.popUp-thank').css('display','none');
      });
     

      $(".prom").bind("click", function(){
        $(".popUp-mainArea").css('display', 'block');
        var inp = $(this).parent().find('input').val();
        if(inp === '1111'){
          $(".popUp-correct-promokod").css('display', 'block');
        }
        else{
          $(".popUp-uncorrect-promokod").css('display', 'block');
        }
      });

      $(".close-pop-basket").bind("click", function(){
        $(".popUp-thank").css('display', 'none');
        $(".popUp-uncorrect-promokod").css('display', 'none');
        $(".popUp-correct-promokod").css('display', 'none');
        $(".popUp-promokod").css('display', 'none');
        $(".popUp-subscription").css('display', 'none');
        $(".popUp-surprize").css('display', 'none');
        $(".popUp-mainArea").css('display', 'none');
      });

      $(".sale-open").bind("click", function(){
        $(".popUp-mainArea").css('display', 'block');
        var inp = $(this).parent().find('input').val();
        if(inp === '1111'){
          $(".popUp-promokod").css('display', 'block');
        }
        else{
          $(".popUp-uncorrect-promokod").css('display', 'block');
        }
      });



      $(".all-title > div").bind("click", function(){
        // $('h4').stopPropagation();
        $(this).parent().parent().find(".all-blocks").removeClass().addClass("all-blocks");
        var $thisClass = $(this).attr("class");
        var $some = $(this).parent().parent().find(".all-blocks").addClass($thisClass + "-show");
        if($(this).hasClass('active')){
          $('div').removeClass('active');
          $(this).parent().parent().find(".all-blocks").removeClass().addClass("all-blocks");
        var $thisClass = $(this).attr("class");
        var $some = $(this).parent().parent().find(".all-blocks").addClass($thisClass + "-show");
        $(this).addClass('active');
        }
        $('div').removeClass('active');
        $(this).addClass('active');
        });

        $(".tit-mob").bind("click", function(){
          $(this).parent().toggleClass('open');
        });
        $(".title-filter").bind("click", function(){
          $(this).parent().toggleClass('open');
        });
        $(".public").bind("click", function(){
          $(this).parent().toggleClass('open-order');
        });

        $(".text").bind("click", function(){
          $(".video").removeClass('this');
          $(".text").removeClass('this');
          $(this).addClass('this');
          $(this).parent().parent().parent().find('.all-text').css('display','block');
          $(this).parent().parent().parent().find('.all-video').css('display','none');
        });
   

        $(".video-headline").bind("click", function(){
          $('.video-headline').removeClass('active');
          $('.text-headline').removeClass('active');
          $(this).addClass('active');
          $(this).parent().parent().find('.all-review-text').css('display','none');
          $(this).parent().parent().find('.all-review-video').css('display','block');
          $('.all-review-video').slick('refresh');
        });
        $(".text-headline").bind("click", function(){
          $('.video-headline').removeClass('active');
          $('.text-headline').removeClass('active');
          $(this).addClass('active');
          $(this).parent().parent().find('.all-review-text').css('display','block');
          $(this).parent().parent().find('.all-review-video').css('display','none');
          $('.all-review-text').slick('refresh');
        });
       


      $('.anyProduct').hover(function(){
        var imgSrc = $(this).attr('src');
      
        $(this).parent().parent().find('.main-img').attr('src' , imgSrc);
      });
      
      $('.anyProduct').on('click', function(){
        var imgSrc = $(this).attr('src');
        $('.main-img').attr('src' , imgSrc);
      });

      //sliders

      // $(".volume").slick({
      //   // infinite: false,
      //   // centerMode: true,
      //   // focusOnSelect: true,
      //   arrows: false,
      //   focusOnSelect: true,
      //   // prevArrow:"<div class='slick-prev4'>&lsaquo;</div>",
      //   // nextArrow:"<div class='slick-next4'>&rsaquo;</div>",
      //   dots: false,
      //   slidesToShow: 3,
      //   slidesToScroll: 1,
      // });
});
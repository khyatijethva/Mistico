$(document).ready(function () {
      $('nav').meanmenu();
     })

    $(function() {
        setInterval(function() {
            var nextItem = $('.slider-item.active').fadeOut().removeClass('active').next('.slider-item');

            if (nextItem.length === 0) {
                nextItem = $('.slider-item').last().css({ opacity: "1", visiblity: "visible" });;
            }

            nextItem.fadeIn(2000).addClass('active ');

        }, 15000);
    })

    $('#owl-carousel1').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:500,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

    $('#owl-carousel2').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:500,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        767:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
$(document).ready(function(){
  $(".set > a").on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(200);
      $(".set > a i").removeClass("fa-angle-up").addClass("fa-angle-down");
    }else{
      $(".set > a i").removeClass("fa-angle-up").addClass("fa-angle-down");
    $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
    $(".set > a").removeClass("active");
    $(this).addClass("active");
    $('.content').slideUp(200);
    $(this).siblings('.content').slideDown(200);
    }
    
  });
});
  $('#n_banner').owlCarousel({
    nav:true,
    loop:true,
    dots:false,
    mouseDrag:false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    margin:0,
    stagePadding:0,
    smartSpeed:450
})
      $('#nf_banner').owlCarousel({
    nav:true,
    loop:true,
    dots:false,
    mouseDrag:false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    margin:0,
    stagePadding:0,
    smartSpeed:450
})

function show1(){
  document.getElementById('div1').style.display ='none';
}
function show2(){
  document.getElementById('div1').style.display = 'block';
}

$(function () {
        $("#chk-require").click(function () {
            if ($(this).is(":checked")) {
                $("#dvrequire").show();
            } else {
                $("#dvrequire").hide();
            }
        });
    });
$(function () {
        $("#chk-comm").click(function () {
            if ($(this).is(":checked")) {
                $("#dvcomm").show();
            } else {
                $("#dvcomm").hide();
            }
        });
    });


jQuery(document).on( "click", "a.more-option", function() {


        jQuery("p.form-content").each(function(index, el) {

            if(!jQuery(this).hasClass('tipo_adulto')){


                if(jQuery(this).is(":visible")){

                    if ( $( this ).is( ".tipo_defecto" ) ) {
                        jQuery(this).hide(300);

                        jQuery(".more-option").find('i').removeClass("fa-minus fa").addClass("fa fa-plus");
                    }

                }else{

                    if ( $( this ).is( ".tipo_defecto" ) ) {
                        jQuery(this).show(300);
                        jQuery(".more-option").find('i').removeClass("fa-plus fa").addClass("fa fa-minus");
                    }

                }



            }

        });

    });



$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});


// gallary-slider

var changeSlide = 4; // mobile -1, desktop + 1
// Resize and refresh page. slider-two slideBy bug remove
var slide = changeSlide;
          if ($(window).width() < 600) {
             var slide = changeSlide;
              slide--;
          }
          else if ($(window).width() > 999) {
             var slide = changeSlide;
              slide++;
          }
          else{
           var slide = changeSlide;
          }
  $(document).ready(function() {
      $('.one').owlCarousel({
          nav: true,
          items: 1,
      })
      $('.two').owlCarousel({
          nav: true,
          margin: 15,
          mouseDrag: false,
          touchDrag: false,
          responsive: {
              0: {
                  items: changeSlide - 1,
                  slideBy: changeSlide - 1
              },
              600: {
                  items: changeSlide,
                  slideBy: changeSlide
              },
              1000: {
                  items: changeSlide + 1,
                  slideBy: changeSlide + 1
              }
          }
      })
      var owl = $('.one');
      owl.owlCarousel();
      owl.on('translated.owl.carousel', function(event) {
          $(".right").removeClass("nonr");
          $(".left").removeClass("nonl");
          if ($('.one .owl-next').is(".disabled")) {
              $(".slider .right").addClass("nonr");
          }
          if ($('.one .owl-prev').is(".disabled")) {
              $(".slider .left").addClass("nonl");
          }
          $('.slider-two .item').removeClass("active");
          var c = $(".slider .owl-item.active").index();
          $('.slider-two .item').eq(c).addClass("active");
          var d = Math.ceil((c + 1) / (slide)) - 1;
          $(".slider-two .owl-dots .owl-dot").eq(d).trigger('click');
      })
      $('.right').click(function() {
          $(".slider .owl-next").trigger('click');
      });
      $('.left').click(function() {
          $(".slider .owl-prev").trigger('click');
      });
      $('.slider-two .item').click(function() {
          var b = $(".item").index(this);
          $(".slider .owl-dots .owl-dot").eq(b).trigger('click');
          $(".slider-two .item").removeClass("active");
          $(this).addClass("active");
      });
      var owl2 = $('.two');
      owl2.owlCarousel();
      owl2.on('translated.owl.carousel', function(event) {
          $(".right-t").removeClass("nonr-t");
          $(".left-t").removeClass("nonl-t");
          if ($('.two .owl-next').is(".disabled")) {
              $(".slider-two .right-t").addClass("nonr-t");
          }
          if ($('.two .owl-prev').is(".disabled")) {
              $(".slider-two .left-t").addClass("nonl-t");
          }
      })
      $('.right-t').click(function() {
          $(".slider-two .owl-next").trigger('click');
      });
      $('.left-t').click(function() {
          $(".slider-two .owl-prev").trigger('click');
      });
  });
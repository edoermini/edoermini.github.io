$(document).ready(function() {

    // logo effect on page load complete

    $('.circle').css({
        'opacity': '100%',
        'transition-duration': '1s',
    })

    setTimeout(() => $('.text-logo-container .square').css({
        'opacity':'100%',
        'transition-duration': '1.5s'
    }), 500);

    setTimeout(() => $('.text-logo-container').css({
        'transform': 'translate(15%, -50%)',
        'transition-duration': '1.5s',
    }), 500);

    setTimeout(() => $('.text-logo-container .text .ticket').css({
        'transform': 'translate(0, 0)',
        'opacity':'100%'
    }), 1500);

    setTimeout(() => $('.text-logo-container .text .smart').css({
        'transform': 'translate(0, 0)',
        'opacity':'100%'
    }), 2200);

    setTimeout(() => $('.text-logo-container .text .working').css({
        'transform': 'translate(0, 0)',
        'opacity':'100%'
    }), 2900);

    setTimeout(() => $('.slogan').css({
        'opacity':'100%',
        'transition-duration':'2.5s'
    }), 3600);


    // home page background slideshow effect

    $('.home-page').backgroundSlideshow({
        images: [
            "img/bg1.jpg ",
            "img/bg2.jpg",
            "img/bg3.jpg",
            "img/bg4.jpg",
            "img/bg5.jpg",
        ],
        fixed: true,
        delay: 3000,
        transitionDuration: 2000,
    });
})

$(window).scroll(function(){
    if ($('.circle').offset().top - $(window).scrollTop() < 60) {
        $('.navbar').css({
            'background-color': '#003459',
            'height':'70px',
            'transition-duration':'0.5s',
            'color': '#F6AE2D'
        })
        
    } else {
        $('.navbar').css({
            'background-color': 'transparent',
            'height':'120px',
            'transition-duration':'0.5s',
            'color': '#F6AE2D'
        })
    }
})

$(document).on('click', '.next-page-arrow', function() {
    smoothScroll('.presentation-page')
})

$(document).on('click', '#aziende', function() {
    $('.highlighted').removeClass('highlighted')
    $('#aziende').addClass('highlighted')

    $('.highlighter').css({
        'transform':'translate(0px)',
        'transition-duration':'0.4s'
    })

    $('.switcher').css({
        'background': 'linear-gradient(90deg, rgba(251,251,251,1) 0%, rgba(241,242,243,1) 50%)'
    })

    $('.active').fadeOut('fast', function () {
        $('.active').removeClass('active')
        $('.aziende').addClass('active')
        $('.aziende').fadeIn('fast')
    })
})
$(document).on('click', '#coworking', function() {
    $('.highlighted').removeClass('highlighted')
    $('#coworking').addClass('highlighted')

    $('.highlighter').css({
        'transform':'translate(' + $('.highlighter').width()*1  + 'px)',
        'transition-duration':'0.4s'
    })

    $('.switcher').css({
        'background': 'linear-gradient(90deg, rgba(241,242,243,1) 0%, rgba(251,251,251,1) 50%, rgba(241,242,243,1) 100%)'
    })

    $('.active').fadeOut('fast', function () {
        $('.active').removeClass('active')
        $('.coworking').addClass('active')
        $('.coworking').fadeIn('fast')
    })
})
$(document).on('click', '#dipendenti', function() {
    $('.highlighted').removeClass('highlighted')
    $('#dipendenti').addClass('highlighted')

    $('.highlighter').css({
        'transform':'translate(' + $('.highlighter').width()*2 + 'px)',
        'transition-duration':'0.4s'
    })

    $('.switcher').css({
        'background': 'linear-gradient(90deg, rgba(241,242,243,1) 50%, rgba(251,251,251,1) 100%)'
    })

    $('.active').fadeOut('fast', function () {
        $('.active').removeClass('active')
        $('.dipendenti').addClass('active')
        $('.dipendenti').fadeIn('fast')
    })
})

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadein').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            
            if ($(this).outerHeight() >= $(window).height()*0.65) {
                if( bottom_of_window*1.35 > bottom_of_element ){
                    $(this).animate({'opacity':'1'},500);
                }
            } else {
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({'opacity':'1'},500);
                }
            }
        }); 
    });
});

$(document).on('click', '#contacts-ref', function() {

    if ($('.contacts-page').height() < $(window).height()) {
        smoothScroll('.contacts-form');
    } else {
        smoothScroll('.contacts-page');
    }
})

function smoothScroll(page) {
    var el = $(page)
    var elOffset = el.offset().top;
    var elHeight = el.height();
    var windowHeight = $(window).height();
    var offset;
        
    if (elHeight < windowHeight) {
        offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
    } else if (elHeight > windowHeight){
        offset = elOffset - 69;
    } else {
        offset = elOffset;
    }

    var speed = 500;
    $('html, body').animate({scrollTop:offset}, speed);
}

function selectEvent(value) {
    
    switch (value) {
        case "azienda":
            $("#nome-coworking").fadeOut('fast', function () {
                $("#nome-azienda").fadeIn('fast');
            })
            console.log("azienda");
            break;

        case "coworking":
            $("#nome-azienda").fadeOut('fast', function () {
                $("#nome-coworking").fadeIn('fast');
            });
            console.log("coworking");
            break;
    }
}

function sendMail() {
    var formData = $(".contacts-form").serialize();

    console.log(formData)

    $.ajax({
       url: '/sendmail.php',
       type: 'POST',
       data: formData,
       success:function(response){
          alert(response);
      }
  });
}

function showMailPoupUp() {
    $('html').css('overflow', 'hidden')
}
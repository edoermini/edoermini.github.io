// implements navbar links selection
$(document).ready(function() {
    $('.top-navbar-link-elem').click(function() {
        $('.top-navbar-links').find('a').removeClass('selected')
        $(this).addClass('selected')

        $('.mobile-navbar-links').css({
            'opacity':'0',
            'transition-duration':'0.3s'
        })
        $('.mobile-navbar-links').css({
            'visibility': 'hidden'
        })
        closeMenu();
    });
});

// implements dynamic navbar on scroll
$(document).ready(function() {
    $(window).scroll(function(){
        if ($('.home-picture').offset().top - $(window).scrollTop() < 60) {
            
            $('.top-navbar').css({
                'color':'black',
                'background-color':'rgba(255, 255, 255, 1)',
                'height':'60px',
                'transition-duration':'0.3s',

            });
            $('.top-navbar-title').css({
                'margin-top':'0px',
                'transition-duration':'0.3s'
            })
            $('.top-navbar-links').css({
                'margin-top':'0px',
                'transition-duration':'0.3s'
            })
            $('.open-menu').css({
                'margin-top':'0px',
                'transition-duration':'0.3s'
            })

        } else {
            $('.top-navbar').css({
                'background-color':'initial',
                'height':'100px',
                'color':'white',
                'transition-duration':'0.3s',
            });
            $('.top-navbar-title').css({
                'margin-top':'40px',
                'transition-duration':'0.3s'
            })
            $('.top-navbar-links').css({
                'margin-top':'40px',
                'transition-duration':'0.3s'
            })
            $('.open-menu').css({
                'margin-top':'40px',
                'transition-duration':'0.3s'
            })
        }
    });
});

// implements menu collapsing
$(document).ready(function() {
    if ($(window).width() <= 600) {
        $('.top-navbar-links').addClass('mobile-navbar-links')
    }

    $(window).resize(function() {
        if ($(window).width() <= 600 ){
            $('.top-navbar-links').addClass('mobile-navbar-links')
        } else {
            $('.top-navbar-links').removeClass('mobile-navbar-links')
            $('.top-navbar-links').removeAttr('style')
        }
    })
})

// implements opening menu effect
$(document).ready(function() {
    $('.open-menu').click(function() {
        openMenu();
    })
})

// implements closing menu effect
$(document).ready(function() {
    $('.close-menu').click(function() {
        closeMenu()
    })
})

// implements typewriter effect
$(document).ready(function() {
    new Typewriter('#typewriter', {
        strings: [
            'Computer Science student.',
            'Web developer.',
            'Software developer.',
            'Cybersecurity enthusiast.',
        ],
        autoStart: true,
        loop: true,
        cursorClassName:'typewriter-cursor',
        wrapperClassName:'typewriter-wrapper',
    });
});


function closeMenu() {
    $('.mobile-navbar-links').css({
        'transform': 'scale(0.005, 0.003)',
        'opacity': '0%',
        'transition-duration': '0.3s',
    })
    $('.mobile-navbar-links').css({
        'visibility': 'hidden'
    })
    $('html').css('overflow', '')
}

function openMenu() {
    $('.mobile-navbar-links').css({
        'visibility': 'visible'
    })
    $('.mobile-navbar-links').css({
        'transform': 'scale(1, 1)',
        'opacity': '100%',
        'transition-duration': '0.3s',
    })
    $('html').css('overflow', 'hidden')
}
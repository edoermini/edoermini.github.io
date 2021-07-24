// implements navbar links selection and scrolling on click
$(document).ready(function() {
    $('.top-navbar-link-elem').click(function() {
        $('.top-navbar-links').find('a').removeClass('selected')
        $(this).addClass('selected')
        
        scrollTo($(this).attr('href'))

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

// implements dynamic navbar and and links higlight on scroll
$(document).ready(function() {

    setBg2Nav()
    highlightNavLinks()

    $(window).scroll(function(){
        setBg2Nav()
        highlightNavLinks()
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
            if ($('.top-navbar-links').hasClass('mobile-navbar-links')) {
                $('.top-navbar-links').removeClass('mobile-navbar-links')
                $('.top-navbar-links').removeAttr('style')
                setBg2Nav()
            }
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
            "Degree in Computer Science.",
            'MCs student in cybersecurity.',
            'Software developer.',
            'Cybersecurity enthusiast.',
        ],
        autoStart: true,
        loop: true,
        cursorClassName:'typewriter-cursor',
        wrapperClassName:'typewriter-wrapper',
    });
});

function scrollTo(page) {
    var el = $(page)
    var elOffset = el.offset().top;
    var elHeight = el.height();
    var windowHeight = $(window).height();
    var offset;

    if ($(page).attr('id') == 'contacts') {
        offset = elOffset;
    } else {
        
        if (elHeight < windowHeight) {
            offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
        } else if (elHeight > windowHeight){
            offset = elOffset - 60;
        } else {
            offset = elOffset;
        }
    }

    var speed = 300;
    $('html, body').animate({scrollTop:offset}, speed);
}

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

// highlights navbar links based on pages position
function highlightNavLinks() {
    var windowHeight = $(window).height();

    $('.top-navbar-links a').each(function(i, section) {
        var link = $(section)
        var page = $($(section).attr('href'))

        if (page.height() < windowHeight) {
            var adjust = (windowHeight - page.height())/2
        } else {
            var adjust = 0;
        }

        var offset = page.offset().top - $(window).scrollTop() - adjust;

        if ((offset + windowHeight - adjust >= 0) && (offset + windowHeight - adjust <= windowHeight+100)) {
            $('.top-navbar-links').find('a').removeClass('selected')
            link.addClass('selected')
        }
        
    })
}

function setBg2Nav() {
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
}
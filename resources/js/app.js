require('./bootstrap');
import { gsap } from "gsap";

$('body').on('click', '.button-container-2', function(e) {
    gsap.to('#content h1', {
        x: -20,
        opacity: 0,
        onComplete: function() {
            $('#content h1').html("Nous <span>adorons</span> aider nos clients!");
        }
    })

    gsap.to('#content h2', {
        delay: 0.2,
        x: -20,
        opacity: 0,
        onComplete: function() {
            $('#content h2').text("Quel projet avez-vous en tête?");
        }
    })

    gsap.to('#funnel-questions', {
        delay: 0.4,
        y: -10,
        opacity: 0,
        onComplete: function() {
            $('#funnel-questions').html(`<div class="button-container-2">
            <span class="mas">Voir l'offre de services</span>
          <button type="button" name="Hover">Voir l'offre de services</button>
        </div>
        <div class="button-container-2">
            <span class="mas">Découvrir l'expertise</span>
          <button type="button" name="Hover">Découvrir l'expertise</button>
        </div>
        <div class="button-container-2">
            <span class="mas">Collaborer avec notre équipe</span>
          <button type="button" name="Hover">Collaborer avec notre équipe</button>
        </div>`);
            
        }
    })

    gsap.to('#content h1', {
        delay: 1,
        x: 0,
        opacity: 1
    })

    gsap.to('#content h2', {
        delay: 1.2,
        x: 0,
        opacity: 1
    })

    gsap.to('#funnel-questions', {
        delay: 1.9,
        y: 0,
        opacity: 1,
    });
    
});

$('.button-container-2').mouseenter(function() {
    gsap.to($(this), {
        y: 7,
        duration: .05
    })
});

$('.button-container-2').mouseleave(function() {
    gsap.to($(this), {
        y: 0,
        duration: .05
    })
});

// phone hover
$('#header-phone').mouseenter(function() {
    $(this).addClass('hover');

    gsap.to('#header-phone', {
        yoyo: true,
        repeat: 5,
        x: '+=4',
        rotate: '15deg',
        duration: .07
    })
})

// burger hover
$('#header-burger').mouseenter(function() {
    $(this).addClass('hover');

    gsap.to('header #header-options #header-burger #burger-top', {
        y: -3
    })
    
    gsap.to('header #header-options #header-burger #burger-bottom', {
        y: 3
    })
})

$('#header-burger').mouseout(function() {
    $(this).removeClass('hover');

    gsap.to('header #header-options #header-burger #burger-top', {
        y: 0
    })
    
    gsap.to('header #header-options #header-burger #burger-bottom', {
        y: 0
    })
})
    
gsap.to('#overlay .first', {
    delay: .2,
    width: '0%',
    duration: .75,
    ease: "power2.out"
})

gsap.to('#overlay .second', {
    delay: .4,
    width: '0%',
    duration: .75,
})

gsap.to('#overlay .third', {
    delay: .6,
    width: '0%',
    duration: .75,
})

gsap.from('header #logo', {
    delay: 1.0,
    opacity: 0,
    x: -20
})

gsap.from('#content h1', {
    delay: 1.2,
    opacity: 0,
    x: -20
})

gsap.from('#content h2', {
    delay: 1.4,
    opacity: 0,
    x: -20
})

gsap.from('#content #funnel-questions div', {
    delay: 1.5,
    opacity: 0,
    x: -20,
    stagger: 0.08
})

gsap.from('#content #bullets div', {
    delay: 2,
    opacity: 0,
    y: -20,
    stagger: 0.08
})

gsap.from('header #header-options #header-phone', {
    delay: 2.3,
    opacity: 0,
    x: -20,
    stagger: 0.1
})

gsap.from('header #header-options #header-burger #burger-top', {
    delay: 2.4,
    opacity: 0,
    y: -15
})

gsap.from('header #header-options #header-burger #burger-bottom', {
    delay: 2.4,
    opacity: 0,
    y: 15
})

gsap.from('header #header-options #header-burger #burger-tomato', {
    delay: 2.5,
    opacity: 0,
    x: 10
})
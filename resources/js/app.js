require('./bootstrap');
import { gsap } from "gsap";

$('body').on('click', '.button-container-1, .button-container-2, .button-container-3', function(e) {
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
            $('#funnel-questions').html(`<div class="button-container-1">
            <span class="mas">Voir l'offre de services</span>
          <button type="button" name="Hover">Voir l'offre de services</button>
        </div>
        <div class="button-container-2">
            <span class="mas">Découvrir l'expertise</span>
          <button type="button" name="Hover">Découvrir l'expertise</button>
        </div>
        <div class="button-container-3">
            <span class="mas">Collaborer avec notre équipe</span>
          <button type="button" name="Hover">Collaborer avec notre équipe</button>
        </div>`);
        }
    })

    gsap.to('#bullets > div:nth-child(2) > div', {
        delay: .8,
        width: '100%',
        height: '100%',
        opacity: 1,
        background: 'linear-gradient(333deg, #fd7866 0%, #f45c8b 100%)'
    });

    gsap.to('#content h1', {
        delay: 1.4,
        x: 0,
        opacity: 1
    })

    gsap.to('#content h2', {
        delay: 1.6,
        x: 0,
        opacity: 1
    })

    gsap.to('#funnel-questions', {
        delay: 1.8,
        y: 0,
        opacity: 1,
    });
    
});

$('.button-container-1, .button-container-2, .button-container-3').mouseenter(function() {
    gsap.to($(this), {
        y: 7,
        duration: .05,
        border: '1px solid white'
    })
});

$('.button-container-1, .button-container-2, .button-container-3').mouseleave(function() {
    gsap.to($(this), {
        y: 0,
        duration: .05,
        border: '1px solid transparent'
    })
});

// phone hover
$('#header-phone').mouseenter(function() {
    gsap.to('#header-phone', {
        yoyo: true,
        repeat: 3,
        rotate: '12deg',
        duration: .08
    })
})

// burger hover
$('#header-burger').mouseenter(function() {
    gsap.to('header #header-options #header-burger #burger-top', {
        y: -3
    })
    
    gsap.to('header #header-options #header-burger #burger-bottom', {
        y: 3
    })

    gsap.to('header #header-options #header-burger #burger-salad', {
        opacity: 1,
        marginBottom: '3px',
        left: 0,
        transform: 'rotate(0)'
    })
})

$('#header-burger').mouseleave(function() {
    gsap.to('header #header-options #header-burger #burger-top', {
        y: 0
    })
    
    gsap.to('header #header-options #header-burger #burger-bottom', {
        y: 0
    })

    gsap.to('header #header-options #header-burger #burger-salad', {
        opacity: 0,
        marginBottom: 0,
        left: '5px',
        transform: 'rotate(5deg)'
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

gsap.to('#content h2', { 
    delay: 4,
    y:'-=8',
    x:'+=2', 
    rotation:'-=1',
    duration: 6
});

gsap.to('#content h2', {
    delay: 10, 
    y:'+=5', 
    x:'-=2',
    rotation:'+=1',
    duration: 10
})

gsap.to('#content h2', { 
    delay: 20,
    y:'-=8',
    x:'+=2', 
    rotation:'-=1',
    duration: 6
});

gsap.to('#content h2', {
    delay: 26, 
    y:'+=5', 
    x:'-=2',
    rotation:'+=1',
    duration: 10
})


gsap.from('#content #funnel-questions div:not(.line)', {
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
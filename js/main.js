//preloader
$(function() {
    $(document).ready(function() {
        $('#preloader').fadeOut(400);
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:125,
        dots:false,
        navText:['<img src="img/Arrow_left.svg">','<img src="img/Arrow_right.svg">'],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            690:{
                items:2
            },
            930:{
                items:2
            },
            1110:{
                items:3
            },
            1290:{
                items:3
            },
            
        }
    })
})


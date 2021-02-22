$(document).ready(function (){
    $('.carousel-img .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        autoplay: true,
        autoplayTimeout:5000,
        animateOut:'fadeOut',
        slideTransition : 'linear',
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
});

$(document).ready(function (){
    $('.description .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots: false,
        autoplay: true,
        center: true,
        stagePadding:50,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});

$(document).ready(function (){
    $('#customer .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots: false,
        autoplay: false,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});
var lastScrollTop = 0;
    
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var navHeight = $(".navbar").outerHeight();
    
            if (scroll > lastScrollTop && scroll >= navHeight) {
                // Scroll ke bawah, sembunyikan navbar
                $(".navbar").removeClass("show").addClass("hide");
            } else {
                // Scroll ke atas atau di bagian atas halaman, tampilkan navbar
                $(".navbar").removeClass("hide").addClass("show");
            }
    
            lastScrollTop = scroll;
        });

    /* Owl carousel */
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
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

    
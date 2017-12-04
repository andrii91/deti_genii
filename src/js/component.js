
    $(document).ready(function() {
      
      $('.clients-more').click(function() {
        $(this).parent().find('.more').slideToggle(200);
        $(this).toggleClass('active');
        $('.clients-more').text('Смотреть полностью....');
        $('.clients-more.active').text('Свернуть...');
      })
                
        $('.head-img img').click(function() {
            var destination = $(".program").offset().top - 0;
            $("body,html").animate({
                scrollTop: destination
            }, 500);
        });


        $('.scene').parallax({
            scalarX: 15,
            scalarY: 15,
            frictionX: 0.1,
            frictionY: 0.1
        });
        $('.scene-raketa').parallax({
            scalarX: 15,
            scalarY: 15,
            frictionX: 0.1,
            frictionY: 0.1
        });
        $('.clients-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: false,
            responsive: {
                0: {
                    items: 1,
                }

            }
        });

        $('a[href*="#"]:not([href="#"])').click(function(event) {
            scrollToSection(this);
            event.preventDefault();
        });


        // get target position and scrolls to it
        function scrollToSection(self) {
            // get the target href
            var href = $(self).attr('href');

            // get the target position
            var targetPos = $(href).offset().top + 5;

            // scroll to target
            $('html, body').animate({
                scrollTop: targetPos
            }, 400);
        }

        $('.mob-btn').click(function() {
            $('.menu').slideToggle();
        });
        if ($(window).width() < 1200) {
            $('.menu li').click(function() {
                $('.menu').hide();
            });

        }
        $('.modal-btn').click(function(e) {
            e.preventDefault;
            $('#' + $(this).data('modal')).show('1000');
            $('#' + $(this).data('modal')).animate({
                opacity: 1,
            });
            $('body').addClass('overl-h');
            $('.overlay').show('1000');
        });
        $('.overlay, .popup__close').click(function() {
            $('body').removeClass('overl-h');
            $('.modal').hide('1000');
            $('.overlay').hide('1000');
            $('.modal').animate({
                opacity: 0,
            });
        });

        $('.more-btm').click(function(){
            $(this).parent().find('ol li').show('200');
        })

    });
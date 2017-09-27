(function($){
    $.fn.viewportChecker = function(useroptions){
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            offset: 100,
            callbackFunction: function(elem){}
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
            windowHeight = $(window).height();

        this.checkElements = function(){
            // Set some vars to check with
            var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html'),
                viewportTop = $(scrollElem).scrollTop(),
                viewportBottom = (viewportTop + windowHeight);

            $elem.each(function(){
                var $obj = $(this);
                // If class already exists; quit
                if ($obj.hasClass(options.classToAdd)){
                    return;
                }

                // define the top position of the element and include the offset which makes is appear earlier or later
                var elemTop = Math.round( $obj.offset().top ) + options.offset,
                    elemBottom = elemTop + ($obj.height());

                // Add class if in viewport
                if ((elemTop < viewportBottom) && (elemBottom > viewportTop)){
                    $obj.addClass(options.classToAdd);

                    // Do the callback function. Callback wil send the jQuery object as parameter
                    options.callbackFunction($obj);
                }
            });
        };

        // Run checkelements on load and scroll
        $(window).scroll(this.checkElements);
        this.checkElements();

        // On resize change the height var
        $(window).resize(function(e){
            windowHeight = e.currentTarget.innerHeight;
        });
    };





})(jQuery);

    $(window).on("load", function() {
        var loadWrap = $(".loading-wrapper"),
            loader = loadWrap.find(".loader");
        loader.fadeOut(1000, function() {
            loadWrap.fadeOut(1000, function() {
                loadWrap.remove();
                $('.zoom').addClass("hidden_animation").viewportChecker({
                    classToAdd: 'visible animated zoomInDown', // Class to add to the elements when they are visible
                    offset: 50    
                });

                $('.myflip').addClass("hidden_animation").viewportChecker({
                    classToAdd: 'visible animated flip', // Class to add to the elements when they are visible
                    offset: 50    
                });

                $('.right').addClass("hidden_animation").viewportChecker({
                    classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
                    offset: 50    
                });
                $('.left, .course-list li').addClass("hidden_animation").viewportChecker({
                    classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
                    offset: 50    
                });

                $('.down').addClass("hidden_animation").viewportChecker({
                    classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
                    offset: 50    
                });
            });
        });

    });

    $(document).ready(function() {
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

    });
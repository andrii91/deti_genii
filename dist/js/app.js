!function(e){e.fn.viewportChecker=function(i){var o={classToAdd:"visible",offset:100,callbackFunction:function(e){}};e.extend(o,i);var a=this,n=e(window).height();this.checkElements=function(){var i=navigator.userAgent.toLowerCase().indexOf("webkit")!=-1?"body":"html",t=e(i).scrollTop(),s=t+n;a.each(function(){var i=e(this);if(!i.hasClass(o.classToAdd)){var a=Math.round(i.offset().top)+o.offset,n=a+i.height();a<s&&n>t&&(i.addClass(o.classToAdd),o.callbackFunction(i))}})},e(window).scroll(this.checkElements),this.checkElements(),e(window).resize(function(e){n=e.currentTarget.innerHeight})}}(jQuery),$(window).on("load",function(){var e=$(".loading-wrapper"),i=e.find(".loader");i.fadeOut(1e3,function(){e.fadeOut(1e3,function(){e.remove(),$(window).width()>1200&&($(".zoom").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated zoomInDown",offset:50}),$(".myflip").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated flip",offset:50}),$(".right").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated bounceInRight",offset:50}),$(".left, .course-list li").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated bounceInLeft",offset:50}),$(".down").addClass("hidden_animation").viewportChecker({classToAdd:"visible animated bounceInDown",offset:50}))})})}),$(document).ready(function(){function e(e){var i=$(e).attr("href"),o=$(i).offset().top+5;$("html, body").animate({scrollTop:o},400)}$(".head-img img").click(function(){var e=$(".program").offset().top-0;$("body,html").animate({scrollTop:e},500)}),$(".scene").parallax({scalarX:15,scalarY:15,frictionX:.1,frictionY:.1}),$(".scene-raketa").parallax({scalarX:15,scalarY:15,frictionX:.1,frictionY:.1}),$(".clients-carousel").owlCarousel({loop:!0,margin:0,nav:!0,navText:!1,responsive:{0:{items:1}}}),$('a[href*="#"]:not([href="#"])').click(function(i){e(this),i.preventDefault()}),$(".mob-btn").click(function(){$(".menu").slideToggle()}),$(window).width()<1200&&$(".menu li").click(function(){$(".menu").hide()}),$(".modal-btn").click(function(e){e.preventDefault,$("#"+$(this).data("modal")).show("1000"),$("#"+$(this).data("modal")).animate({opacity:1}),$("body").addClass("overl-h"),$(".overlay").show("1000")}),$(".overlay, .popup__close").click(function(){$("body").removeClass("overl-h"),$(".modal").hide("1000"),$(".overlay").hide("1000"),$(".modal").animate({opacity:0})})});
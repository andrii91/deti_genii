$(document).ready(function(){function e(e){var o=$(e).attr("href"),a=$(o).offset().top+5;$("html, body").animate({scrollTop:a},400)}$(".clients-more").click(function(){$(this).parent().find(".more").slideToggle(200),$(this).toggleClass("active"),$(".clients-more").text("Смотреть полностью...."),$(".clients-more.active").text("Свернуть...")}),$(".head-img img").click(function(){var e=$(".program").offset().top-0;$("body,html").animate({scrollTop:e},500)}),$(".scene").parallax({scalarX:15,scalarY:15,frictionX:.1,frictionY:.1}),$(".scene-raketa").parallax({scalarX:15,scalarY:15,frictionX:.1,frictionY:.1}),$(".clients-carousel").owlCarousel({loop:!0,margin:0,nav:!0,navText:!1,responsive:{0:{items:1}}}),$('a[href*="#"]:not([href="#"])').click(function(o){e(this),o.preventDefault()}),$(".mob-btn").click(function(){$(".menu").slideToggle()}),$(window).width()<1200&&$(".menu li").click(function(){$(".menu").hide()}),$(".modal-btn").click(function(e){e.preventDefault,$("#"+$(this).data("modal")).show("1000"),$("#"+$(this).data("modal")).animate({opacity:1}),$("body").addClass("overl-h"),$(".overlay").show("1000")}),$(".overlay, .popup__close").click(function(){$("body").removeClass("overl-h"),$(".modal").hide("1000"),$(".overlay").hide("1000"),$(".modal").animate({opacity:0})})});
/* global $, alert, console*/
(function($) {
	"use strict";
	/* ---------------------------------------------------
		Loading Page
	----------------------------------------------------- */
	$(window).on("load", function() {
		var loadWrap = $(".loading-wrapper"),
			loader = loadWrap.find(".loader");
		loader.fadeOut(1000, function () {
			loadWrap.fadeOut(1000, function() {
				loadWrap.remove();
			});
		});
	});

	/* ---------------------------------------------------
		Menu Off Canvas
	----------------------------------------------------- */
	var openBtn = $("#open-button"),
	colseBtn = $("#close-button"),
	menu = $(".menu-wrap");
	// Open menu when click on menu button
	openBtn.on("click", function() {
		menu.addClass("active");
	});
	// Close menu when click on Close button
	colseBtn.on("click", function() {
		menu.removeClass("active");
	});
	// Close menu when click on anywhere on the document
	$(document).on("click", function(e) {
		var target = $(e.target);
		if (target.is(".menu-wrap, .menu, .icon-list, .icon-list a, .icon-list a span, #open-button") === false) {
			menu.removeClass("active");
			e.stopPropagation();
		}
	});

	/* ---------------------------------------------------
		To Top Button
	----------------------------------------------------- */
	var toTop = $("#toTop");
	function showBtn() {
		if ($(window).scrollTop() >= 400) {
			toTop.addClass("active");
		} else {
			toTop.removeClass("active");
		}
	}
	showBtn();
	toTop.on("click", function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	});
	$(window).on("scroll", showBtn);

	/* ---------------------------------------------------
		Move to any section after clicking on its link
	----------------------------------------------------- */
	var scrLink = $(".scroll-link");
	scrLink.on("click", function(e) {
		e.preventDefault();
		var target = $($(this).attr("href"));
		if (target) {
			$("html, body").animate({
				scrollTop: target.offset().top + 5
			}, 1000);
		}
	});
})(jQuery);


/* ---------------------------------------------------
		Google Map 
----------------------------------------------------- */
function initMap() {
	// Styles a map in night mode.
	var myLatLng = {lat: 30.600581, lng: 32.260263};
	var mySecondLatLng = {lat: 40.664, lng: -73.955};
	var map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		scrollwheel: false,
		zoom: 14,
		// Light Style
		styles: [{"featureType": "all","elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},{"featureType": "all","elementType": "labels.text.stroke","stylers":[{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},{"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]},{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 20}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 21}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#dedede"},{"lightness": 21}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#cccccc"},{"lightness": 17}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#e2e2e2"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#e3e3e3"},{"lightness": 16}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#cccccc"},{"lightness": 17}]}]
	});
	// Adding Marker
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: "http://i.imgur.com/mDbIgpt.png"
	});
}
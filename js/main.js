
(function($) {
	$(document).ready(function(){
		if($(window).scrollTop() > 70){
			$("#sticky").addClass('is-isticky')
		}
	});
$(window).scroll(function(e) {
		if($(window).scrollTop() > 300)
			$(".toTop").fadeIn(300);
		else
			$(".toTop").fadeOut(300);
	});
	$(".toTop").click(function(e) {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});
	var searchToggle = $(".search-toggle"),
		closeA = $(".scale"),
		closeB = $(".searching button"),
		cBody = $("body"),
		closeScale = closeA.add(closeB);

	if(closeScale.length > 0) {
		closeScale.on("click", function() {
			cBody.removeClass("open");
			return false;
		});
	}

	$(".close").on("click", function() {
		$("body").removeClass("open");
	}); // Commons Variables

	var $window = $(window),
		$body = $("body"); // Sticky Menu

	$($window).on("scroll", function() {
		var scroll = $($window).scrollTop();

		if(scroll < 70) {
			$("#sticky").removeClass("is-isticky");
		} else {
			$("#sticky").addClass("is-isticky");
		}
	}); // Off Canvas toggler Function

	var $offCanvasToggle = $(".offcanvas-toggle"),
		$offCanvas = $(".offcanvas"),
		$offCanvasOverlay = $(".offcanvas-overlay"),
		$mobileMenuToggle = $(".mobile-menu-toggle");
	$offCanvasToggle.on("click", function(e) {
		e.preventDefault();
		var $this = $(this),
			$target = $this.attr("href");
		$body.addClass("offcanvas-open");
		$($target).addClass("offcanvas-open");
		$offCanvasOverlay.fadeIn();

		if($this.parent().hasClass("mobile-menu-toggle")) {
			$this.addClass("close");
		}
	});
	$(".offcanvas-close, .offcanvas-overlay").on("click", function(e) {
		e.preventDefault();
		$body.removeClass("offcanvas-open");
		$offCanvas.removeClass("offcanvas-open");
		$offCanvasOverlay.fadeOut();
		$mobileMenuToggle.find("a").removeClass("close");
	}); //  Off Canvas Menu
	var $offcanvasMenu2 = $("#offcanvas-menu2 li a");
	$offcanvasMenu2.on("click", function(e) {
		$(this).closest("li").toggleClass("active");
		$(this).closest("li").siblings().removeClass("active");
		$(this).closest("li").siblings().children(".category-sub-menu").slideUp();
		$(this).closest("li").siblings().children(".category-sub-menu").children("li").toggleClass("active");
		$(this).closest("li").siblings().children(".category-sub-menu").children("li").removeClass("active");
		$(this).parent().children(".category-sub-menu").slideToggle();
	});

	$(function() {
		$(".platform-toggle>a").click(function() {
			$(this).siblings("ul").stop().slideToggle();
		});

	});

	//footer year
	var year = new Date();
	var footYear = year.getFullYear();
	$("#footer-year").text(footYear);

})(jQuery);

function selCountry() {
	var sel = $("#country option:selected").attr("title");
	$("#CountryNumber").html(sel);
};

//language
$('.right-bar-toogle').on('click', function() {
	$(this).toggleClass("right-bar-active").siblings().removeClass("right-bar-active");
	if($(this).hasClass("right-bar-active")) {
		$(this).children("a").children("i").removeClass("fa-angle-down").addClass("fa-angle-up");
	} else {
		$(this).children("a").children("i").removeClass("fa-angle-up").addClass("fa-angle-down");
	};
});

$(".scale-up,.right-bar-toogle").on("click", function(e) {
	e.stopPropagation();
});
$(document).click(function(e) {
	var _con = $(".right-bar-toogle");
	if(!_con.is(e.target) && _con.has(e.target).length === 0) {
		$(".right-bar-toogle").removeClass("right-bar-active");
		$(".right-bar-toogle").children("a").children("i").removeClass("fa-angle-up").addClass("fa-angle-down");
	}
});



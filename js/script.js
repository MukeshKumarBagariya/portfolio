$(window).on("load", function () {
	$(".loader .inner").fadeOut(2000, function() {
		$(".loader").fadeOut(2000)
	});
})

$(document).ready(function() {

	$('#slides').superslides({
		pagination: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});


	


	var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });


		}


		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());

				element.countup(endVal);
			})

			countUpFinished = true;

		}


	});


	$("[data-fancybox]").fancybox();

	$("#navigation li a").click( function (e) {
		e.preventDefault();

		const targetElement = $(this).attr("href");
		const targetPosition = $(targetElement).offset().top;
		$("html, body").animate({scrollTop : targetPosition - 50 }, "slow")
	})

	const nav = $("#navigation");
	const navTop = nav.offset().top;
	$(window).on('scroll', stckNavigation);
	function stckNavigation() {
		const body = $("body");
		if ($(window).scrollTop() >= navTop) {
			body.addClass("fixedNav");
			body.css("padding-top", nav.outerHeight() + "px")
		} else {
			body.removeClass("fixedNav");
			body.css("padding-top", 0)
		}
	}

});

















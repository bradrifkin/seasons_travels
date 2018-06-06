$(document).ready(function() {
	$("#homepagefall").hover(function() {
		$("#fall a img").attr("src", "images/fall_homepage_button2.jpg");
		$("#fall").css({"background-color": "#DA5518", "color": "#fff"});
	}, function() {
		$("#fall a img").attr("src", "images/fall_homepage_button_b&w2.jpg");
		$("#fall").css({"background-color": "rgba(78,78,78,0.4", "color": "inherit"});
	});

	$("#homepagewinter").hover(function() {
		$("#winter a img").attr("src", "images/winter_homepage_button2.jpg");
		$("#winter").css({"background-color": "#578FB6", "color": "#fff"});
	}, function() {
		$("#winter a img").attr("src", "images/winter_homepage_button_b&w2.jpg");
		$("#winter").css({"background-color": "rgba(78,78,78,0.4", "color": "inherit"});
	});

	$("#homepagespring").hover(function() {
		$("#spring a img").attr("src", "images/spring_homepage_button2.jpg");
		$("#spring").css({"background-color": "#496303", "color": "#fff"});
	}, function() {
		$("#spring a img").attr("src", "images/spring_homepage_button_b&w2.jpg");
		$("#spring").css({"background-color": "rgba(78,78,78,0.4", "color": "inherit"});
	});

	$("#homepagesummer").hover(function() {
		$("#summer a img").attr("src", "images/summer_homepage_button2.jpg");
		$("#summer").css({"background-color": "#F69081", "color": "#fff"});
	}, function() {
		$("#summer a img").attr("src", "images/summer_homepage_button_b&w2.jpg");
		$("#summer").css({"background-color": "rgba(78,78,78,0.4", "color": "inherit"});
	});

	$("#hamburger").click(function() {
		$(".desc1a_small").fadeToggle(200);
		$(".desc1b_small").fadeToggle(200);
		$("#mobile_menu").slideToggle();
	});
});
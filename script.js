$(document).ready(function(){
	$("div#design").click(function() {
		$(".design").toggle();
		$(".p-1").toggle();
	});
	$("div#dev").click(function(){
		$("#dev-image").toggle();
		$("#dev-text").toggle();
	});
	$("div#product").click(function(){
		$("#product-image").toggle();
		$("#product-text").toggle();
	});
	$("div#jim").hover(function() {
		$("div#jim-text").toggle();
	})
	$("div#bailey").hover(function() {
		$("div#bailey-text").toggle();
	});
	$("div#burned").hover(function(){
		$("div#burned-text").toggle();
	});
	$("div#age").hover(function(){
		$("div#age-text").toggle();
	});
	$("div#elexa").hover(function(){
		$("div#elexa-text").toggle();
	});
	$("div#crystals").hover(function(){
		$("div#crystals-text").toggle();
	});
	$("div#ontario").hover(function(){
		$("div#ontario-text").toggle();
	});
	$("div#dark").hover(function(){
		$("div#dark-text").toggle();
    });
});
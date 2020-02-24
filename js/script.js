$(document).ready(function(){
	$("#sign").click(function() {
		$("#sign1").toggle();
		$("#sign2").toggle();
	});
	$("#dev").click(function(){
		$("#development").toggle();
		$("#para2").toggle();
	});
	$("#manage").click(function(){
		$("#product").toggle();
		$("#para3").toggle();
	});
});

$(document).ready(function() {
    $("#col2").hover(
      function() {
        $(this)
          .find(".mytextimage")
          .show();
      },
      function() {
        $(this)
          .find(".mytextimage")
          .hide();
      }
	);
	
  });



  $(document).ready(function(){
	  document.getElementById ("form").addEventListener("submit", popping);
	  function popping(){
		  alert ("The message of yours is received successfully")
	  }

  });

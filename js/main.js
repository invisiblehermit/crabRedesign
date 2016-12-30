$(document).ready(function() {

	$( ".navbar-custom li span" ).click(function() {
	  $(this).parent().find(".dropdown-content").toggle();
	  $(this).text(function(i, text){
          return text === "+" ? "-" : "+";
      })

	});






});


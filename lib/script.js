new WOW().init();
$(document).ready(function(){
	$(".nav-link").click(function(e){
		
		e.preventDefault();
		
		$(".nav").toggleClass("active");
	});
});

     
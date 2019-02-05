new WOW().init();
$(document).ready(function(){
	$(".nav-link").click(function(e){
		
		e.preventDefault();
		
		$(".nav").toggleClass("active");
	});
	$(".login-form-item__input").focusin(function(){
		
		$(this).parent().toggleClass("active");
	}).focusout(function(){
		
		$(this).parent().toggleClass("active");
	});
});

     
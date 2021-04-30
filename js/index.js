$(".button").click(function(){
	console.log("Opened Form");
 	
 	$(".form").fadeIn("4000");
	$("#CTA").css("display","none");

	$("#submit").click(function(){
  		console.log("Closed Form");
  		alert("Thank you for contacting me, I will be in touch soon!");
  		$(".form").fadeOut("4000");
  		$("#CTA").css("display","block");
	});
});
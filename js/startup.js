$(function() {
	var anim = window.location.href == "https://s-miranda.github.io/";
	if(anim){
		$('#1').animate({top: "-6px", opacity: "0"}, 0);
		$('#2').animate({top: "-6px", opacity: "0"}, 0);
		$('#3').animate({top: "-6px", opacity: "0"}, 0);
		$('#user').animate({top: "12px", opacity: "0"}, 0);

		$('#icon').hide().delay(750).fadeIn(1000, function() {
			$('#1').animate({top: "0px", opacity: "1"}, 500);
			$('#2').delay(250).animate({top: "0px", opacity: "1"}, 500);
			$('#3').delay(500).animate({top: "0px", opacity: "1"}, 500);
			$('#user').delay(2000).animate({top: "22px", opacity: "1"}, 1000);
		});
	}
});
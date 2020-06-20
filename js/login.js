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
	error = []
	error.push("</br>Ａｃｃｅｓｓ ｄｅｎｉｅｄ");
	error.push("</br>Ｉｎｖａｌｉｄ ｅｍａｉｌ");

	$('#pass').bind('keyup', function(e) {
		if (e.keyCode == 13) {
				$('#login').fadeOut(250, function() {
					$('#error').html(error[0]).delay(1000).fadeIn(250).delay(3000).fadeOut(500, function() {
						$('#user_id').val('');
						$('#pass').val('');
						$('#login').fadeIn(1000);
					});
				});
		}
	});
	
	$('#pass').on('focus', function(){
		$('#fp').fadeIn(500);
	});
	$('#pass').on('focusout', function(){
		$('#fp').fadeOut(250);
	});
	
	$('#email').bind('keyup', function(e) {
		if (e.keyCode == 13) {
			var email = $('#address').val();
			var valid = /^[^0-9][A-z0-9_]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/;
			if(valid.test(email)) {
				alert(email);
			}
			else{
			$('#email').fadeOut(250, function() {
					$('#error').html(error[1]).fadeIn(1000).delay(3000).fadeOut(500, function() {
						$('#address').val('');
						$('#email').fadeIn(1000);
					});
				});
			}
		}
	});
	
	$('#forgot').on('click', function() {
		$('#login').fadeOut(250, function() {
			$('#email').fadeIn(1000);
		});
	});
});
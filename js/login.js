$(function() {
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
	
	$('#mail').bind('keyup', function(e) {
		if (e.keyCode == 13) {
			var email = $('#email').val();
			var valid = /^[^0-9][A-z0-9_]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/;
			if(valid.test(email)) {
				alert(email);
			}
			else{
			$('#mail').fadeOut(250, function() {
					$('#error').html(error[1]).fadeIn(1000).delay(3000).fadeOut(500, function() {
						$('#email').val('');
						$('#mail').fadeIn(1000);
					});
				});
			}
		}
	});
	
	$('#forgot').on('click', function() {
		$('#login').fadeOut(250, function() {
			$('#mail').fadeIn(1000);
		});
	});
});
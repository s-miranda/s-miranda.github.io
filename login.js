$(document).ready(function() {
	
	error = []
	error.push("</br>Ａｃｃｅｓｓ ｄｅｎｉｅｄ&nbsp;&nbsp;");
	error.push("</br>Ｉｎｖａｌｉｄ ｅｍａｉｌ");
	
	$('#pass').bind('keyup', function(e) {
					if (e.keyCode == 13) {
							$('#login').fadeOut(1000, function() {
								$('#error').html(error[0]).fadeIn(1000).delay(3000).fadeOut(500, function() {
									$('#user_id').val('');
									$('#pass').val('');
									$('#login').fadeIn(1000);
									$('#fp').fadeIn(1000);
								});
							});
					}
				});
				
				$('#email').bind('keyup', function(e) {
					if (e.keyCode == 13) {
						var email = $('#address').val();
						var valid = /^[^0-9][A-z0-9_]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/;
						if(valid.test(email)) {
							alert(email);
						}
						else{
						$('#email').fadeOut(1000, function() {
								$('#error').html(error[1]).fadeIn(1000).delay(3000).fadeOut(500, function() {
									$('#address').val('');
									$('#email').fadeIn(1000);
								});
							});
						}
					}
					
				$('#forgot').on('click', function() {
					$('#login').fadeOut(500, function() {
						$('#email').fadeIn(1000);
					});
				});
});
});
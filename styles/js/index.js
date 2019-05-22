$('document').ready(function() {

//****************************   Navigation   ****************************//

	function mobile_gallery(){
		$('.b-middle__form .form-item label input').click(function(){
			if ($(this).is(':checked')) {
				$('.b-middle__form .form-item figure').css({"display":"none"});
				$(this).prev().css({"display":"block"});	
				console.log('1');
			} else{
				$(this).prev().css({"display":"none"});

			}
			
		});	
	}

	if ($(window).width() < 1023) {
			mobile_gallery();
		} else{
			$('.b-middle__form .form-item figure').css({"display":"block"});
		}

	

	
	








	

});
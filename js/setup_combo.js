function init(){
	
$(document).ready(function(){
		$.combo({destiny: $('#country'), url: 'list_country.php'});
		
		$('#country').change(function(){
			$.combo({destiny: $('#city'),
				url: 'find.php?id='+ $('#country').val()
				});
		});
		
	});
}

init();
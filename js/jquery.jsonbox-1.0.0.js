jQuery.combo = function(settings){
	var config = {
			'destiny'	: '',
			'url'		: ''  
	};
	
	if(settings){
		$.extend(config, settings);
	}
	list(config.url, config.destiny);
};	

	
function list(url, comboId){
	$.ajax({
		  url: url,
		  context: document.body,
		  success: function(req){
		    cleanCombo(comboId);
		    setCombo(req, comboId);
		  }
		});
	
}	
	
function setCombo(data, comboId){
		
	data =  eval(data);
	var keys = getKeysJSON(data);
		
	comboId[0].options[0] = new Option('Select..','');
		
	for(i=0; i<data.length; i++){
		eval ("var description = data[i] ."+ keys[0]);
		eval ("var value = data[i] ."+ keys[1]);
		comboId[0].options[i+1] = new Option(value, description);
	}			
		
}
	
	
function cleanCombo(comboId){
	while (comboId[0].options.length) {
		comboId[0].remove(0);
	}
}

function getKeysJSON(data){
	var keys = Array();
	var index = 0;
		
	for(var i in data){
		for(var j in data[i]){
			keys[index] = j;
			index++;
		}
		break;
	}
	return keys;
}
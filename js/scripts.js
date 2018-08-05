'use strict';

var output = document.getElementById('greeter-output');

output.innerHTML = 'Click the button to convert!' + '<br><br>' + output.innerHTML; 

var button = document.getElementById('greeter-button');

var temperature;


button.addEventListener('click', function(){
	temperature = window.prompt('What is the temperature in Celsius?');
	
	if ( temperature === '' || temperature == null || temperature === NaN ){
	output.innerHTML = 'No value entered!' + '<br><br>' + output.innerHTML;
	}
	else {
	output.innerHTML = 'Your temperature in Celsius is '+temperature+' in Fahrenheit is '+(temperature * 1.8 + 32)+ '!' + '<br><br>' + output.innerHTML; 
	}
}); 
'use strict';

var output = document.getElementById('greeter-output');

output.innerHTML = 'Click the button to convert!' + '<br><br>' + output.innerHTML; 

var button = document.getElementById('greeter-button');

var temperature;

var btn = document.getElementById('green-button');

var convert; 

var write = document.getElementById('green-output');
writer.innerHTML = 'Click the button to convert!' + '<br><br>' + write.innerHTML;

button.addEventListener('click', function(){
	temperature = window.prompt('What is the temperature in Celsius?');
	
	if (temperature <= 0) {
		output.innerHTML = 'State of water concentration: ice.' + '<br><br>' + output.innerHTML;
	} else if (temperature <100) {
		output.innerHTML = 'State of water concentration: liquid.' + '<br><br>' + output.innerHTML;
	} else if (temperature >= 100) {
		output.innerHTML = 'State of water concentration: gas.' + '<br><br>' + output.innerHTML;
	}
	if (temperature  <=5) {
		output.innerHTML = 'At this temperature we have winter.' + '<br><br>' + output.innerHTML;
	} else if (temperature >5 && temperature <=15) {
		output.innerHTML = 'At this temperature we have autumn.' + '<br><br>' + output.innerHTML;
	} else if (temperature > 15) {
		output.innerHTML = 'At this temperature we have summer' + '<br><br>' + output.innerHTML;
	}
	
	if (temperature === '' || temperature == null || temperature === NaN) {
	output.innerHTML = 'No value entered!' + '<br><br>' + output.innerHTML;
	}
	else {
	output.innerHTML = 'Your temperature in Celsius is '+temperature+' in Fahrenheit is '+(temperature * 1.8 + 32)+ '!' + '<br><br>' + output.innerHTML; 
	}
}); 

btn.addEventListener('click', function(){
	convert = window.prompt('What is the temperature in Fahrenheit?');
	
	if (convert <= 32) {
		write.innerHTML = 'State of water concentration: ice.' + '<br><br>' + write.innerHTML;
	} else if (convert < 212) {
		write.innerHTML = 'State of water concentration: liquid.' + '<br><br>' + write.innerHTML;
	} else if (convert >= 212) {
		write.innerHTML = 'State of water concentration: gas.' + '<br><br>' + write.innerHTML;
	}
	if (temperature  <=5) {
		write.innerHTML = 'At this temperature we have winter.' + '<br><br>' + write.innerHTML;
	} else if (convert >5 && convert <=15) {
		write.innerHTML = 'At this temperature we have autumn.' + '<br><br>' + writet.innerHTML;
	} else if (temperature > 15) {
		write.innerHTML = 'At this temperature we have summer' + '<br><br>' + write.innerHTML;
	}
	
	if ( convert === '' || convert == null || convert === NaN){
	write.innerHTML = 'No value entered!' + '<br><br>' + write.innerHTML;
	}
	else {
	write.innerHTML = 'Your temperature in Fahrenheit is '+convert+' in Celsius is '+((convert - 32)/ 1.8)+ '!' + '<br><br>' + write.innerHTML; 
	}
}); 


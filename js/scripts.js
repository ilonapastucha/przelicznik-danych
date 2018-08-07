"use strict";

var output = document.getElementById('greeter-output');

output.innerHTML = 'Click the button to convert!' + '<br><br>' + output.innerHTML; 

var button = document.getElementById('greeter-button');

var temperature;

var btn = document.getElementById('green-button');

var convert; 

var writer = document.getElementById('green-output');
writer.innerHTML = 'Click the button to convert!' + '<br><br>' + writer.innerHTML;

button.addEventListener('click', function(){
	temperature = window.prompt('What is the temperature in Celsius?');
	output.innerHTML ='';	
	if ( isNaN(temperature) || temperature === '' || temperature == null || temperature === NaN) {
	    output.innerHTML = 'No value entered!' + '<br><br>' + output.innerHTML;
	}
    else {
        if (temperature <= 0) {
            output.innerHTML = 'State of water concentration: ice.' + '<br><br>' + output.innerHTML;
        } else if (temperature < 100) {
            output.innerHTML = 'State of water concentration: liquid.' + '<br><br>' + output.innerHTML;
        } else if (temperature >= 100) {
            output.innerHTML = 'State of water concentration: gas.' + '<br><br>' + output.innerHTML;
        }
        if (temperature <= 5) {
            output.innerHTML = 'At this temperature we have winter.' + '<br><br>' + output.innerHTML;
        } else if (temperature > 5 && temperature <= 15) {
            output.innerHTML = 'At this temperature we have autumn.' + '<br><br>' + output.innerHTML;
        } else if (temperature > 15) {
            output.innerHTML = 'At this temperature we have summer' + '<br><br>' + output.innerHTML;
        }
	    output.innerHTML = 'Your temperature in Celsius is '+temperature+' in Fahrenheit is '+(temperature * 1.8 + 32)+ '!' + '<br><br>' + output.innerHTML; 
	}
}); 

btn.addEventListener('click', function(){
	convert = window.prompt('What is the temperature in Fahrenheit?');
	writer.innerHTML = '';

	if (isNaN(convert) || convert === '' || convert == null || convert == NaN){
	writer.innerHTML = 'No value entered!' + '<br><br>' + writer.innerHTML;
	}
	else {
	writer.innerHTML = 'Your temperature in Fahrenheit is '+convert+' in Celsius is '+((convert - 32)/ 1.8)+ '!' + '<br><br>' + writer.innerHTML; 
		if (convert <= 32) {
			writer.innerHTML = 'State of water concentration: ice.' + '<br><br>' + writer.innerHTML;
		} else if (convert < 212) {
			writer.innerHTML = 'State of water concentration: liquid.' + '<br><br>' + writer.innerHTML;
		} else if (convert >= 212) {
			writer.innerHTML = 'State of water concentration: gas.' + '<br><br>' + writer.innerHTML;
		}
		if (convert <= 41) {
			writer.innerHTML = 'At this temperature we have winter.' + '<br><br>' + writer.innerHTML;
		} else if (convert >41 && convert <=59) {
			writer.innerHTML = 'At this temperature we have autumn.' + '<br><br>' + writer.innerHTML;
		} else if (convert > 59) {
			writer.innerHTML = 'At this temperature we have summer' + '<br><br>' + writer.innerHTML;
		}
	}
}); 
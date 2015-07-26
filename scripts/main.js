/**
 *  
 */

//'use strict';

//----------------------------------------//
function generate(type, text) {

	var n = noty({
		text: text,
		type: type,
		dismissQueue: true,
		layout: 'topRight',
		closeWith: ['click'],
		theme: 'relax',
		maxVisible: 10,
		animation: {
			open: 'animated bounceInRight',
			close: 'animated bounceOutRight',
			easing: 'swing',
			speed: 250
		}
	});

	//console.log('html: ' + n.options.id);

	return n;
}

//----------------------------------------//
function generateInfoMessage(message, seconds) {
	var noty = generate('warning', '<div class="activity-item font600"> <i class="fa fa-info text-warning"></i> <div class="activity"> ' + message + ' </div> </div>');
	setTimeout(function () { $.noty.close(noty.options.id); }, seconds);
}

//----------------------------------------//
$(document).ready(function () {

	generateInfoMessage('Playing in Annandale, VA this Saturday night 7/25. Open bar until 9PM. <a href="http://www.google.com">Come check it out.</a>.', 7000);

});
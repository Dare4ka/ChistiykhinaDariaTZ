$(function() {

	var before = $('.butons__link_before');
	var next = $('.butons__link_next');
	var step = $('.step');

	before.click(function sliderBefore() {
		next.removeClass('butons__link_disabled');
		if (step.hasClass('step_two')) {
			step.removeClass('step_two');
			step.addClass('step_one');
			before.addClass('butons__link_disabled');
		} else {
			if (step.hasClass('step_three')) {
				step.removeClass('step_three');
				step.addClass('step_two');
			} else {
				step.addClass('step_one');
			}
		}
	});

	next.click(function sliderNext() {
		before.removeClass('butons__link_disabled');
		if (step.hasClass('step_two')) {
			step.removeClass('step_two');
			step.addClass('step_three');
			next.addClass('butons__link_disabled');
		} else {
			if (step.hasClass('step_one')) {
				step.removeClass('step_one');
				step.addClass('step_two');
			} else {
				step.addClass('step_three');
			}
		}
	});
});
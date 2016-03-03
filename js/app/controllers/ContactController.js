function ContactController(something, time) {
	something.name = 'Bill Gates';

	time(function () {
		something.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
/**
 *  
 */

'use strict';

//----------------------------------------//
var applicationModule = angular.module('applicationModule', ['ui.router', 'ngAnimate']);

applicationModule.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    var baseurl = '/';

    $urlRouterProvider.otherwise(baseurl);

    $locationProvider.html5Mode(true);

    $stateProvider
	// home
	.state('index', {
		url: baseurl,
		templateUrl: 'templates/home.html',
		controller: 'homeController'
	})

    $stateProvider
	// home
	.state('home', {
		url: baseurl + 'home',
		templateUrl: 'templates/home.html',
		controller: 'homeController'
	})

	// events
    .state('events', {
        url: baseurl + 'events',
        templateUrl: 'templates/events.html',
        controller: 'eventsController'
    })

    // bio
    .state('bio', {
        url: baseurl + 'bio',
        templateUrl: 'templates/bio.html',
        controller: 'bioController'
    })
		
	// music
    .state('music', {
    	url: baseurl + 'music',
    	templateUrl: 'templates/music.html',
    	controller: 'musicController'
    })

	// photos
    .state('photos', {
    	url: baseurl + 'photos',
    	templateUrl: 'templates/photos.html',
    	controller: 'photosController'
    })

	// videos
    .state('videos', {
    	url: baseurl + 'videos',
    	templateUrl: 'templates/videos.html',
    	controller: 'videosController'
    })

    // contact
    .state('contact', {
    	url: baseurl + 'contact',
    	templateUrl: 'templates/contact.html',
    	controller: 'contactController'
    });

});

//----------------------------------------//
applicationModule.controller("indexController", function ($scope, $http, $location) {

	// Properties
	$scope.heading = '';
	$scope.headingCaptionBase = 'DJ Fresh';
	$scope.headingCaption = $scope.headingCaptionBase;
	$scope.date = new Date();

	$scope.navigationLinks = [
		{ Id: 'events', Name: 'EVENTS', Title: 'Events' },
		{ Id: 'bio', Name: 'BIO', Title: 'Bio' },
		{ Id: 'music', Name: 'MUSIC', Title: 'Music' },
		{ Id: 'photos', Name: 'PHOTOS', Title: 'Photos' },
		{ Id: 'videos', Name: 'VIDEOS', Title: 'Videos' },
		{ Id: 'contact', Name: 'CONTACT', Title: 'Contact' }
	];


	$scope.$on('pageChange', function (event, menu) {
		$scope.heading = menu;
		$scope.headingCaption = $scope.headingCaptionBase + ' - ' + menu;
	});
});

//----------------------------------------//
applicationModule.controller("homeController", function ($scope) {
	$scope.$emit('pageChange', 'Home');
});

//----------------------------------------//
applicationModule.controller("eventsController", function ($scope) {
	$scope.$emit('pageChange', 'Events');
});

//----------------------------------------//
applicationModule.controller("bioController", function ($scope) {
	$scope.$emit('pageChange', 'Bio');
});

//----------------------------------------//
applicationModule.controller("musicController", function ($scope) {
	$scope.$emit('pageChange', 'Music');
});

//----------------------------------------//
applicationModule.controller("photosController", function ($scope) {
	$scope.$emit('pageChange', 'Photos');
});

//----------------------------------------//
applicationModule.controller("videosController", function ($scope) {
	$scope.$emit('pageChange', 'Videos');
});

//----------------------------------------//
applicationModule.controller("contactController", function ($scope, $timeout) {
	$scope.$emit('pageChange', 'Contact');

	$scope.onSend = function () {
		$scope.isProcessing = true;
		generateInfoMessage('Send button clicked', 5000);

		$timeout(function () {
			$scope.isProcessing = false;
		}, 5000);
	};

});



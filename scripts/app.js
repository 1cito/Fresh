/**
 *  
 */

//'use strict';

//----------------------------------------//
var appMainModule = angular.module('appMain', ['ui.router', 'ngAnimate']);

appMainModule.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    var baseurl = '/';

    $urlRouterProvider.otherwise(baseurl);

    $locationProvider.html5Mode(true);

    $stateProvider
	// home
	.state('index', {
		url: baseurl,
		templateUrl: 'templates/home.html',
		controller: 'homeViewModel'
	})

    $stateProvider
	// home
	.state('home', {
		url: baseurl + 'home',
		templateUrl: 'templates/home.html',
		controller: 'homeViewModel'
	})

	// events
    .state('events', {
        url: baseurl + 'events',
        templateUrl: 'templates/events.html',
        controller: 'eventsViewModel'
    })

    // bio
    .state('bio', {
        url: baseurl + 'bio',
        templateUrl: 'templates/bio.html',
        controller: 'bioViewModel'
    })
		
	// music
    .state('music', {
    	url: baseurl + 'music',
    	templateUrl: 'templates/music.html',
    	controller: 'musicViewModel'
    })

	// photos
    .state('photos', {
    	url: baseurl + 'photos',
    	templateUrl: 'templates/photos.html',
    	controller: 'photosViewModel'
    })

	// videos
    .state('videos', {
    	url: baseurl + 'videos',
    	templateUrl: 'templates/videos.html',
    	controller: 'videosViewModel'
    })

    // contact
    .state('contact', {
    	url: baseurl + 'contact',
    	templateUrl: 'templates/contact.html',
    	controller: 'contactViewModel'
    });

});

//----------------------------------------//
appMainModule.controller("indexViewModel", function ($scope, $http, $location) {
	$scope.heading = '';
	$scope.headingCaptionBase = 'DJ Fresh';
	$scope.headingCaption = $scope.headingCaptionBase;


	$scope.$on('pageChange', function (event, menu) {
		$scope.heading = menu;
		$scope.headingCaption = $scope.headingCaptionBase + ' - ' + menu;

	});

	$scope.getNavMenuClass = function (name) {
		return ($scope.heading.toLowerCase() == name.toLowerCase()) ? 'active' : 'inactive';
	};

});

//----------------------------------------//
appMainModule.controller("homeViewModel", function ($scope, $http, $location) {
	$scope.$emit('pageChange', 'Home');
});

//----------------------------------------//
appMainModule.controller("eventsViewModel", function ($scope, $http, $location) {
	$scope.$emit('pageChange', 'Events');
});

//----------------------------------------//
appMainModule.controller("bioViewModel", function ($scope, $http, $location) {
	$scope.$emit('pageChange', 'Bio');
});

//----------------------------------------//
appMainModule.controller("musicViewModel", function ($scope, $http, $location) {
	$scope.$emit('pageChange', 'Music');
});

//----------------------------------------//
appMainModule.controller("photosViewModel", function ($scope, $http, $location) {
	$scope.$emit('pageChange', 'Photos');
});

//----------------------------------------//
appMainModule.controller("videosViewModel", function ($scope, $http, $location) {
	$scope.$emit('pageChange', 'Videos');
});

//----------------------------------------//
appMainModule.controller("contactViewModel", function ($scope, $timeout) {
	$scope.$emit('pageChange', 'Contact');

	$scope.onSend = function () {
		$scope.isProcessing = true;
		generateInfoMessage('Send button clicked', 5000);

		$timeout(function () {
			$scope.isProcessing = false;
		}, 5000);
	};

});



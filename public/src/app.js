angular
		.module('cmsApp', ['ngRoute', 'ngResource'])
		.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when('/news', {
				controller: 'ListController',
				templateUrl: 'views/list.html'
			})
			.when('/news/newarticle', {
				controller: 'NewController',
				templateUrl: 'views/newarticle.html'
			})
			.when('/news/:id', {
				controller: 'ArticleController',
				templateUrl: 'views/singleview.html'

			});
		$locationProvider.html5Mode(true);

		});
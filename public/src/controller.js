angular
	.module('cmsApp')
	.controller('ListController', function($scope, News, $location){
		$scope.news = News.query();
		$scope.fields = ['title', 'subheader', 'date', 'author', 'content'];

		$scope.sort = function(field) {
			$scope.sort.field = field;
			$scope.sort.order = !$scope.sort.order;
		};

		$scope.sort.field = 'date';
		$scope.sort.order = false;

		$scope.show = function(id){
			$location.url('/news/' + id);
		};
	})

	.controller('NewController', function($scope, News, $location){
		$scope.article = new News({
			title: ['', 'text'],
			subheader: ['', 'text'],
			date: ['', 'date'],
			author:['', 'text'],
			content:['', 'text']
		});
		$scope.save = function() {
				if ($scope.newarticle.$invalid){
					$scope.$broadcast('reord:invalid');
				} else {
					$scope.article.$save();
					$location.url('/news');
				}
		};

	})
	.controller('ArticleController', function($scope, $location, News, $routeParams){

			$scope.article = News.get({ id: parseInt($routeParams.id, 10)});
			$scope.readMore = function(){
			$scope.limit = 10000;
			};
	});
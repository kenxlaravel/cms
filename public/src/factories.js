angular
		.module('cmsApp')
		.factory('News', function($resource){
			return $resource('/api/news/:id', 
								{ id: '@id'}, 
								{ 'update': { method:'PUT' }
							});
		});
angular
	.module('cmsApp')
	.value('FieldTypes', {
		title: ['text', 'the title should be text only'],
		subheader: ['text', 'the subheader should be text only'],
		date: ['date', 'the date should be text only'],
		author: ['text', 'the author should be text only'],
		content: ['text', 'the content should be text only']
	})
	.directive('formField', function (FieldTypes){

		return {
			restrict: 'EA',
			replac: true,
			templateUrl: 'views/form-field.html',
			scope: {
				record: '=',
				field: '@',
				live: '@',
				required: '@'
			},

			link: function($scope, element, attr){
					$scope.$on('record:invalid', function(){
						$scope[$scope.field].$setDirty();
					});
					$scope.types = FieldTypes;
					$scope.remove = function (field){
						delete $scope.record[field];
					};
			}
		};
	});
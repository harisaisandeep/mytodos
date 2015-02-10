'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
    // $scope.todos= [];
    var todosInStore = localStorageService.get('todos');

$scope.todos = todosInStore || [];

$scope.$watch('todos', function () {
  localStorageService.set('todos', $scope.todos);
}, true);



    //adding to Todo list
   $scope.addTodo=function(){
   	$scope.todos.push($scope.todo);
   	$scope.todo='';
   };

   //Deleting from Todo list
   $scope.deleteTodo=function($index){
   	$scope.todos.splice($index,1);

   };

  });

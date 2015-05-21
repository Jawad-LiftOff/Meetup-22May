var app = angular.module('app',  []);

app.controller('todoController',  function ($scope) {

  $scope.tasks = [{type: 3, name: 'Wake up'},  
  {type: 1, name: 'Take shower'},  
  {type: 1, name: 'Have breakfast'},  
  {type: 1, name: 'Office time'},  
  {type: 1, name: 'Lunch'},  
  {type: 1, name: 'Meeting'}, 
  {type: 2, name: 'Do code'}, 
  {type: 2, name: 'Learn Angular'}, 
  {type: 1, name: 'Back to home'},  
  {type: 1, name: 'Sleep'},
  {type: 2, name: 'Set up meeting for weekend'},
  {type: 2, name: 'Book flight tickets'},
  {type: 2, name: 'Pay bills'}];

});

app.directive('todo', function () {
  return {
    restrict: 'E',
    scope: {
      header: '@',
      tasks: '=',
      taskFilter: '@',
      actionOne: '@',
      actionTwo: '@'
    },
    template: '<h1>{{ header }}</h1>'+
    '<table ng-show="([tasks] | filter: taskFilter).length > 0">'+
    '<tr>'+
    '<th> Task </th>'+
    '<th> {{ actionOneText }} </th>'+
    '<th> {{ actionTwoText }} </th>'+
    '</tr>'+
    '<tr ng-repeat="task in tasks | filter: taskFilter">'+
    '<td><b ng-style="textStyle">{{ task.name }}</b></td>'+
    '<td><input type="checkbox" ng-click="task.type = actionOne"></td>'+
    '<td><input type="checkbox" ng-click="task.type = actionTwo"></td>'+
    '</tr>'+
    '</table>'+
    '<div ng-show="([tasks] | filter:taskFilter).length == 0">{{ noDataMessage }}</div>',
    link: function (scope, element, attrs) {      
      switch(scope.taskFilter) {
        case "1": 
        scope.actionOneText = 'Mark as done'; 
        scope.actionTwoText = 'Move to tomorrow'; 
        scope.noDataMessage = 'You are done for the day..!!';
        scope.textStyle = { 'background-color': 'yellow' };
        break;
        case "2": 
        scope.actionOneText = 'Mark as done'; 
        scope.actionTwoText = 'Move to today'; 
        scope.noDataMessage = 'You got nothing for tomorrow..!!';
        scope.textStyle = { 'background-color': 'cyan' };
        break;
        case "3": 
        scope.actionOneText = 'Move to today'; 
        scope.actionTwoText = 'Move to tomorrow'; 
        scope.noDataMessage = 'Nothing done yet..!!';
        scope.textStyle = { 'text-decoration': 'line-through', 'background-color': 'lime' };
        break;
      }
    }
  };
});
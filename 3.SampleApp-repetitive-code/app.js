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
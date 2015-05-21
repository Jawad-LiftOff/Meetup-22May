var app = angular.module('app',  []);

app.directive('helloWorld',  function () {
      return {
            restrict: 'E',
            template: '<div><h1>Hey!! I am a text from the directive</h1></div>'
      };
});
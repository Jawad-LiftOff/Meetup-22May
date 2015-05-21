angular.module('transcludeexample', [])
// directive without transclusion
.directive('notransclude', function(){
  return {
    restrict: 'E',
    transclude: true,
    template: '<h2>I am a text from the directive</h2>'
  };
})
// directive with transclusion
.directive('dotransclude', function(){
  return {
    restrict: 'E',
    transclude: true,
    template: '<h2>I am a text from the directive</h2><div ng-transclude></div>'
  };
});
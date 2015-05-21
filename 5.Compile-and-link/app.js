angular.module('compilenlink', [])
.directive('pane', function(){
  return {
    restrict: 'E',
    scope: {
      item: '@'
    },
    compile: function(tElem,attrs) {
      console.log('compile called for', attrs.item)
      return function(scope,elem,attrs) {
        console.log('link called for', attrs.item);
      };
    },
    template: '<div>{{ item }}</div>'
  };
});
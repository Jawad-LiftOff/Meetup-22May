angular.module('compilenlink', [])
.directive('pane', function(){
  return {
    restrict: 'E',
    scope: {
      item: '@'
    },
    compile: function(tElem,attrs) {
      console.log('compile called for', attrs.item);
      return {
        pre: function(scope,elem,attrs) { console.log('pre link called for', attrs.item);},
        post: function(scope,elem,attrs) { console.log('post link called for', attrs.item);}
      };
    },
    template: '<div>{{ item }}</div>'
  };
});

angular.module('jbApp').controller('HomeCtrl', function($scope) {
  var vm = this;
  $scope.$parent.global.active.card = 'home';
});
angular.module('jbApp').controller('SpotifyCtrl', function($scope) {
  var vm = this;
  $scope.$parent.global.active.card = 'spotify';
});
angular.module('jbApp').controller('SpotifyCtrl', function($scope) {
  var vm = this;
  $scope.$parent.global.active.card = 'spotify';
});
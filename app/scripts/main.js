var jbApp = angular.module('jbApp', ['ui.router']);


jbApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl as home',
      templateUrl: 'components/home/home.html'
    })
    .state('spotify', {
      url: '/spotify',
      controller: 'SpotifyCtrl as spotify',
      templateUrl: 'components/spotify/spotify.html'
    })
});

jbApp.controller('GlobalCtrl', function() {
  var vm = this;
  vm.active = {};
});

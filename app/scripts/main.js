var jbApp = angular.module('jbApp', ['ui.router']);


jbApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'components/home/home.html',
      controller: 'HomeCtrl as home'
      
    })
    .state('spotify', {
      url: '/spotify',
      templateUrl: 'components/spotify/spotify.html',
      controller: 'SpotifyCtrl as spotify'
    })
});

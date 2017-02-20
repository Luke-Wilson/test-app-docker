angular.module('yoyo', [
  'yoyo.services',
  'yoyo.beers',
  'yoyo.random',
  'ui.router'
])
.config(function($stateProvider) {
  var home = {
    url: '/home',
    templateUrl: '/home/home.html'//,
    // controller: 'HomeController',
    // controllerAs: 'HomeVm'
  };

  var other = {
    url: '/random',
    templateUrl: '/other/other.html',
    controller: 'RandomController',
    controllerAs: 'RandomVm'
  };

  var beers = {
    url: '/beers',
    templateUrl: '/beers/beers.html',
    controller: 'BeersController',
    controllerAs: 'BeersVm'
  };

  $stateProvider
    .state('home', home)
    .state('random', other)
    .state('beers', beers);
});

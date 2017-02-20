angular.module('yoyo', [
  'yoyo.services',
  'yoyo.beers',
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
    url: '/other',
    templateUrl: '/other/other.html'//,
    // controller: 'OtherController',
    // controllerAs: 'OtherVm'
  };

  var beers = {
    url: '/beers',
    templateUrl: '/beers/beers.html',
    controller: 'BeersController',
    controllerAs: 'BeersVm'
  };

  $stateProvider
    .state('home', home)
    .state('other', other)
    .state('beers', beers);
});

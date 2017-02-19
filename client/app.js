angular.module('yoyo', [
  'yoyo.services',
  'ui.router'
])
.config(function($stateProvider) {
  var home = {
    url: '/home',
    templateUrl: '/home/home.html'
  };

  var other = {
    url: '/other',
    templateUrl: '/other/other.html'
  };

  $stateProvider
    .state('home', home)
    .state('other', other);
});

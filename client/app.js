angular.module('yoyo', [
  'yoyo.services',
  'ui.router'
])
.config(function($stateProvider) {
  var home = {
    url: '/home',
    templateUrl: '/home/home.html'
  };

  $stateProvider
    .state('home', home);
});

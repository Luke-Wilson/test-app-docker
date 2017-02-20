angular.module('yoyo.random', [])
.controller('RandomController', function(Beers) {
  var RandomVm = this;
  RandomVm.randomBeer = {};
  RandomVm.getRandomBeer = function() {
    Beers.getRandomBeer()
    .then(beer => {
      console.log(beer);
      RandomVm.randomBeer = beer.data;
    });
  };
});

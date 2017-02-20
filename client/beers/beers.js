angular.module('yoyo.beers', [])
.controller('BeersController', function(Beers) {
  var BeersVm = this;

  BeersVm.selectedGlassware = "0";

  BeersVm.glassware = [{name: 'Loading glassware...', id: 0}];

  Beers.getGlassware()
  .then(response => {
    BeersVm.glassware = response.data;
  });

  BeersVm.beerList = [];

  BeersVm.getBeers = function(id) {
    console.log('getting beers with glassware value:', id)
    Beers.getBeers(id)
    .then(beers => {
      BeersVm.beerList = beers.data;
    });
  };

  BeersVm.updateSelected = function(value) {
    console.log('fired');
    BeersVm.selectedGlassware = value;
  };

});

angular.module('yoyo.beers', [])
.controller('BeersController', function(Beers) {
  var BeersVm = this;

  BeersVm.selectedGlassware = "0";

  BeersVm.loading = false;

  BeersVm.glassware = [{name: 'Loading glassware...', id: 0}];

  Beers.getGlassware()
  .then(response => {
    BeersVm.glassware = response.data;
  });

  BeersVm.beerList = [];

  BeersVm.getBeers = function(id) {
    BeersVm.loading = true;
    Beers.getBeers(id)
    .then(beers => {
      BeersVm.beerList = beers.data;
      BeersVm.loading = false;
    });
  };

  BeersVm.updateSelected = function(value) {
    console.log('fired');
    BeersVm.selectedGlassware = value;
  };

});

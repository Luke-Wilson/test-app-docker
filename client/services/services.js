angular.module('yoyo.services', [])
.factory('Beers', function($http) {
  return {
    getBeers: function(id) {
      return $http({
        method: 'GET',
        url: '/api/beers/' + id
      })
      .then(response => {
        return JSON.parse(response.data.body);
      })
      .catch(error => {
        console.log(error);
      });
    },

    getGlassware: function() {
      return $http({
        method: 'GET',
        url: '/api/glassware'
      })
      .then(response => {
        return JSON.parse(response.data.body);
      })
      .catch(error => {
        console.log(error);
      });
    }
  };
});

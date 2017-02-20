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
      console.log('getting glassware');
      return $http({
        method: 'GET',
        url: '/api/glassware'
      })
      .then(response => {
        console.log('GLASSWARE >>>')
        console.log(JSON.parse(response.data.body))
        return JSON.parse(response.data.body);
      })
      .catch(error => {
        console.log(error);
      });
    }
  };
});

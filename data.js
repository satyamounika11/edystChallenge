var app = angular.module('myApp', []);
app.controller('pokemonCtrl', function($scope, $http) {
  $http.get("https://dev-util.edyst.com/challenge/pokemons/random").then(function (response) {
      $scope.myData = response.data;
  });
});



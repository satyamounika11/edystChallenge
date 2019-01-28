var app = angular.module('myApp', []);
app.controller('pokemonCtrl', function($scope, $http) {
  $http.get("https://dev-util.edyst.com/challenge/pokemons/random").then(function (response) {
      $scope.myData = response.data;
      /*$scope.image = {
        'background-color' : '#f1f1f1',
        'border-radius' : '50%'
      };*/
  });
});


/*var app = angular.module('myApp', [["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when('/index', {
        templateUrl : 'index.html',
        controller : 'myCtrl'
    });
});
app.controller('myCtrl', function($scope, $http) {
  $http.get("pokemonData.json").then(function(response) {
    $scope.myData = response.data;
  });
});*/
angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$cordovaGeolocation,$ionicPlatform) {


var map;
function mostrarMapa(coords) {
  map = new google.maps.Map(document.getElementById('mapa'), {
    center: {lat: coords.latitude, lng: coords.longitude},
    zoom: 8
  });
}

  
$ionicPlatform.ready(function(){



var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {

      $scope.coords=position.coords;
      mostrarMapa(position.coords);


    }, function(err) {
      // error
    });

});



});

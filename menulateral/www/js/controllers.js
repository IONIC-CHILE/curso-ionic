angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$state) {
   $scope.titulo="Cursos";
   $scope.titulomarlon="Curso de Framework Marlon";
   $scope.titulonodejs="Curso de NodeJS";

   $scope.idcursomarlon = $state.params.id;

   console.log("id");
})


.controller('InicioCtrl', function($scope) {
   $scope.codigoMarlon="1";
   $scope.codigoNodejs="2";
})



;

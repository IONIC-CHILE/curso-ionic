angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('inicio', {
    url: '/inicio',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('registrar', {
    url: '/registrar',
    templateUrl: 'templates/registrar.html',
    controller: 'registrarCtrl'
  })

  .state('bienvenidos', {
    url: '/bienvenidos',
    templateUrl: 'templates/bienvenidos.html',
    controller: 'bienvenidosCtrl'
  })

$urlRouterProvider.otherwise('/inicio')

  

});
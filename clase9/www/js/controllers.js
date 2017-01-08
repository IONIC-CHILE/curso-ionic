angular.module('app.controllers', [])
  
.controller('inicioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
   
function ($scope, $stateParams) {

    // Inicializo la base de datos y la tabla
    // inicializacion();
	
	$scope.validar = function(val){
       console.log("Mail:" + val.mail + ", Contraseña: " + val.password)
			
       select(val.email,val.password);

	}
}])
   
.controller('registrarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('bienvenidosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$cordovaCamera) {

  
   $scope.imagenURL = 'http://placehold.it/250x250';

   $scope.makeFoto = function(){
      

      var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };


   $cordovaCamera.getPicture(options)
   .then(function(data){
          console.log('camara informacion:' + angular.toJson(data));
          $scope.imagenURL= 'data:image/jpeg;base64,' + data;
       },function(error){
          console.log('Camara Error:'+ angular.toJson(data));
       }
    );
   };

});

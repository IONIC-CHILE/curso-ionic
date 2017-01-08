angular.module('starter.controllers', [])
.controller('HomeCtrl', function($scope,$http) {
 $scope.data=[];
 $http.get('https://www.reddit.com/r/ios/.json')
 .success(function(response){     
       console.log(response);
     angular.forEach(response.data.children,function(child){
         $scope.data.push(child.data);
      });
 });   
})
;

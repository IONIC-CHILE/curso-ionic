# curso-ionic
Ejemplo de aplicaciones con ionic

# ejemplo1
Este ejemplo demuestra como utilizar variables

![Alt text](https://github.com/IONIC-CHILE/curso-ionic/blob/master/img/1.png?raw=true "Optional Title")

```
.controller('DashCtrl', function($scope) {

   $scope.titulo = "Ejemplo 1";

})
```

# listCoursesSimple
Este ejemplo utiliza una lista simple

![Alt text](https://github.com/IONIC-CHILE/curso-ionic/blob/master/img/2.png?raw=true "Optional Title")



# ListCourseImg
Este ejemplo utiliza una lista simple con imagenes

![Alt text](https://github.com/IONIC-CHILE/curso-ionic/blob/master/img/3.png?raw=true "Optional Title")

```
.controller('HomeCtrl', function($scope) {

$scope.cursos=[
  
  {
    nombre: 'Node JS',
    descripcion:'Para principiantes',
    img: 'http://b.thumbs.redditmedia.com/J0Jwp3grRndmZVt3gi_wB2LLkZeUOZDc33ZximrJCVQ.jpg'
  }

];


})

;

```

```
<ion-view view-title="Cursos">
  <ion-content class="padding">
          <div class="list">
         <div class="item item-text-wrap item-thumbnail-left" ng-repeat="cur in cursos">
             <img src="{{cur.img}}" alt="">
             <h2>{{cur.nombre}}</h2>
             <p>{{cur.descripcion}}</p>         
         </div>
     </div>
  </ion-content>
</ion-view>
```


# listViewWeb
Este ejemplo utiliza Reddit para sacar un Json y mostrarlo

![Alt text](https://github.com/IONIC-CHILE/curso-ionic/blob/master/img/4.png?raw=true "Optional Title")

```
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

```

```
<ion-view view-title="Dashboard">
  <ion-content class="padding">
         <div class="list">
            <a class="item item-thumbnail-left"  href="{{value.url}}"  ng-repeat="value in data" target="_blank">
               <img src="{{value.thumbnail}}" alt="" ng-if="value.thumbnail.startsWith('http')">
               <h2 class="titulo">{{value.title}}</h2> 
               <p>{{value.domain}}</p>             
            </a>
         </div> 
  </ion-content>
</ion-view>
```

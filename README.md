# curso-ionic
Ejemplo de aplicaciones con ionic

# 1 Ejemplo simple
Este ejemplo demuestra como utilizar variables

![Alt text](https://github.com/IONIC-CHILE/curso-ionic/blob/master/img/1.png?raw=true "Optional Title")

```
.controller('DashCtrl', function($scope) {

   $scope.titulo = "Ejemplo 1";

})
```

# 2 Ejemplo con lista
Este ejemplo utiliza una lista simple

![Alt text](https://github.com/IONIC-CHILE/curso-ionic/blob/master/img/2.png?raw=true "Optional Title")



# 3 Ejemplo con lista de imagenes
Este ejemplo utiliza una lista simple con imagenes

![Alt text](https://github.com/IONIC-CHILE/curso-ionic/blob/master/img/3.png?raw=true "Optional Title")

```
.controller('HomeCtrl', function($scope) {

$scope.cursos=[
  
  {
    nombre: 'Node JS',
    descripcion:'Para principiantes',
    img: 'http://b.thumbs.redditmedia.com/J0Jwp3grRndmZVt3gi_wB2LLkZeUOZDc33ZximrJCVQ.jpg'
  },

  {
    nombre: 'Delphi',
    descripcion:'Para principiantes universitarios de Chile, , voluptate natus voluptates ullam aspernatur ratione, alias.',
    img: 'http://b.thumbs.redditmedia.com/C8lkwRaYKZlhKsAdKPvxzciVek0T_elTLEHrcBDGveA.jpg'
  },


  {
    nombre: 'HTML',
    descripcion:'Para principiantes',
    img:'http://b.thumbs.redditmedia.com/YZDKF_QiiShcWPRV3jbARdKPZraVhQpEZBkIR7WaoLQ.jpg'
  },

    {
    nombre: 'Google',
    descripcion:'Para principiantes',
    img:'http://b.thumbs.redditmedia.com/w163AM7oGuSuQKlb-D9hgMaM1fk2BUsQZ2QJw06rsQo.jpg'
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

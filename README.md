# curso-ionic
Ejemplo de aplicaciones con ionic



# Si queremos mostrar una imagen
```
$scope.imagenURL = 'http://placehold.it/250x250';
```

# Link de interes
http://ngcordova.com/



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


# menulateral
Este ejemplo utiliza un menu lateral y parametros por URL

![Alt text](https://github.com/IONIC-CHILE/curso-ionic/blob/master/img/5.png?raw=true "Optional Title")


controllers.js
```
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

```

index.html
```
<body ng-app="menulateral">
    <!--
      The nav bar that will be updated as we navigate between views.
    -->
    
    <ion-side-menus>
     <ion-side-menu-content>

    <ion-nav-bar class="bar-stable">

       <ion-nav-buttons side="left">
          <button menu-toggle="left" class="button button-icon button-clear ion-navicon">
            
          </button>

       </ion-nav-buttons>

      <ion-nav-back-button>
      </ion-nav-back-button>
    </ion-nav-bar>
    <!--
      The views will be rendered in the <ion-nav-view> directive below
      Templates are in the /templates folder (but you could also
      have templates inline in this html file if you'd like).
    -->
    <ion-nav-view></ion-nav-view>
     
     </ion-side-menu-content>

     
     <ion-side-menu side="left">
        <ion-header-bar class="bar-stable">
           <h2 class="title">Menu</h2>
        </ion-header-bar>

        <ion-content ng-controller="InicioCtrl">
          <ion-list>
             <ion-item menu-close href="#/">Inicio</ion-item>
             <ion-item menu-close href="#/marlon/{{codigoMarlon}}">Curso Marlon</ion-item>
             <ion-item menu-close href="#/nodejs">Curso NodeJS</ion-item>
          </ion-list>
        </ion-content>

     <ion-side-menu>

    </ion-side-menus>

  </body>

```

app.js
```
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // Each tab has its own nav history stack:

  .state('home', {
    url: '/',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
  })

    .state('marlon', {
    url: '/marlon/:id',
        templateUrl: 'templates/cursoMarlon.html',
        controller: 'HomeCtrl'
  })


    .state('nodejs', {
    url: '/nodejs',
        templateUrl: 'templates/cursoNodejs.html',
        controller: 'HomeCtrl'
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
```


# camara
Este ejemplo veremos como utilizar la camara en IONIC

![Alt text](https://github.com/IONIC-CHILE/curso-ionic/blob/master/img/6.png?raw=true "Optional Title")


tab-dash.html
```
<ion-view view-title="Camara">
  <ion-content class="padding">
     

  <button ng-click="makeFoto()" class="button button-block button-calm">Camara</button>
     <div class="list card">
        <div class="item">
           <img src="{{imagenURL}}" alt="">
        </div>       
     </div>
  </ion-content>
</ion-view>

```

Index.html
```
    <script src="lib/ngcordova/ng-cordova.js"></script>
```



controllers.js
```
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

```



angular.module('starter.controllers', [])

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

// Simple Webpage
angular.module('webPage', [])
  .controller('webPageController', function($scope){
    $scope.list=[
      {name:'James', age: 29, twitter:'@jsa', img:'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'},
      {name:'Mady', age: 30, twitter:'@madysondesigns', img:'https://s3.amazonaws.com/uifaces/faces/twitter/madysondesigns/128.jpg'},
      {name:'Kim', age: 33, twitter:'@kfiedson', img:'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'},
      {name:'Lee', age: 30, twitter:'@leemunroe', img:'https://s3.amazonaws.com/uifaces/faces/twitter/leemunroe/128.jpg'},
      {name:'Dave', age: 52, twitter:'@davidburlton', img:'https://s3.amazonaws.com/uifaces/faces/twitter/davidburlton/128.jpg'},
      {name:'Amanda', age: 27, twitter:'@pixeliris', img:'https://s3.amazonaws.com/uifaces/faces/twitter/pixeliris/128.jpg'}
    ];
    $scope.addPerson = function(){
      $scope.list.push({name:$scope.name, age:$scope.age});
      $scope.name = '';
      $scope.age = 0;
    };
  });

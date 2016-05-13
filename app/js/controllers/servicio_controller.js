/*angular.module("app").controller("ServicioController", function($scope, PostService){

$scope.resultado=[];
//$scope.resultado2;

$scope.listar = function(){
    PostService.listar().then(

      function exito(resp){
        console.log(resp);
        for (i = 0; i < resp.data.length; i++) {
          $scope.resultado.push(resp.data[i]);
        }
      },function err(resp){
        console.log("error" + resp);
      });
};


$scope.listarpost = function(){
    PostService.listarpost().then(

      function exito(resp){
        console.log(resp);
        $scope.resultado2=resp.data.id;
      },function err(resp){
        console.log("error" + resp);
      });
};


});*/

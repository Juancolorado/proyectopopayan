angular.module("app").factory("PostService",function($http){

  var listar = function(){

    return $http({
      url:'http://jsonplaceholder.typicode.com/posts',
      method : 'GET'
    });
  };


  var listarpost = function(){

    return $http({
      url:'http://jsonplaceholder.typicode.com/posts',
      method : 'POST'
    });
  };

  return{listarpost:listarpost, listar:listar};//esto es un json



});

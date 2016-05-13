angular.module("app").config(function($routeProvider, $locationProvider) {
$locationProvider.html5Mode({enabled:true});

$routeProvider.when("/login",{
    templateUrl:"login.html",
    controller:"LoginController"
});

$routeProvider.when("/iglesias",{
    templateUrl:"iglesias.html",
    controller:"IglesiaController"
});
$routeProvider.when("/sitios",{
    templateUrl:"sitios.html",
    controller:"SitiosController"
});
$routeProvider.when("/restaurantes",{
    templateUrl:"restaurantes.html",
    controller:"RestauratesController"
});
$routeProvider.when("/clima",{
    templateUrl:"clima.html",
    controller:"ClimaController"
});




/*  $routeProvider.when('/servicio', {
    templateUrl: 'servicio.html',
    controller: 'ServicioController'
  });
  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });
  $routeProvider.when('/david', {
    templateUrl: 'juandavid.html',
    controller: 'JuanController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/$resource/list-of-books', {
    templateUrl: 'books_resource.html',
    controller: 'BooksResourceController'
  });

  $routeProvider.when('/$http/list-of-books', {
    templateUrl: 'books_http.html',
    controller: 'BooksHttpController',
    resolve: {
      books: function(BookService) {
        return BookService.getBooks();
      }
    }
  });
*/
  $routeProvider.otherwise({ redirectTo: '/login' });

});

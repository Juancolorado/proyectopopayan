app.controller("LoginController", function($scope, $route, AuthenticationService,SidenavFactory, $mdDialog, $location, $mdSidenav ){

$scope.credentials={username:"",password:""};

$scope.login= function(){
  $scope.authResponse = AuthenticationService.credentials;

  if ($scope.credentials.username === $scope.authResponse.username && $scope.credentials.password === $scope.authResponse.password) {
    $location.path('/iglesias');
    SidenavFactory.setSidenav(true);
    SidenavFactory.setToolbar(true);

  }
  else {
    $mdDialog.show(
      $mdDialog.alert().clickOutsideToClose(true)
      .title('Ups')
      .textContent('Contraseña o nombre de usuario incorrectos')
      .ok('OK')
    );
  }
};

$scope.showSidenav = function(){
  $scope.show = SidenavFactory.getSidenav();
  return $scope.show;
};

$scope.showToolbar = function(){
  $scope.showT = SidenavFactory.getToolbar();
  $scope.toolbarTitle = SidenavFactory.getTitle();
  return $scope.showT;
};

$scope.irSitios = function(){
  SidenavFactory.setSidenav(true);
  SidenavFactory.setToolbar(true);
  SidenavFactory.setTitle("Sitios Turísticos");
  $location.path('/sitios');

};
$scope.irRestaurantes = function(){
  SidenavFactory.setSidenav(true);
  SidenavFactory.setToolbar(true);
  SidenavFactory.setTitle("Restaurantes");
  $location.path('/restaurantes');
};
$scope.irClima = function(){
  SidenavFactory.setSidenav(true);
  SidenavFactory.setToolbar(true);
  SidenavFactory.setTitle("Clima");
  $location.path('/clima');
};
$scope.irIglesias = function(){
  SidenavFactory.setSidenav(true);
  SidenavFactory.setToolbar(true);
  SidenavFactory.setTitle("Iglesias");
  $location.path('/iglesias');
};

});

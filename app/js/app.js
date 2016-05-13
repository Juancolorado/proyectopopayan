var app = angular.module("app", ["ngRoute","ngMaterial"]).config(function($mdThemingProvider) {
  // adds some basic utilities to the $rootScope for debugging purposes
$mdThemingProvider.theme('default')
  .primaryPalette('amber')
  .accentPalette('amber');
});

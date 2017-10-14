(function () {
  'use strict';

  angular
          .module('MyApp')
          .controller('indexController', indexController);

  indexController.$inject = ['$scope', '$state'];

  function indexController($scope, $state) {
    $scope.reset = () => {
      delete $scope.contact;
      $scope.ocult = true;
    };
    $scope.contact = {};
    $scope.ocult = true;
    $scope.datos = () => {
      $scope.ocult = false;
      localStorage.setItem("contact", JSON.stringify($scope.contact));
      $scope.respuesta = ("Hola " + $scope.contact.name + " , usted tiene " + $scope.contact.age + " años de edad.");
    };
  }
})();
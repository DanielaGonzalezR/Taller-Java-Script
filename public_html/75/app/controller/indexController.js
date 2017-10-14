(function () {
  'use strict';
  angular
          .module('MyApp')
          .controller('indexController', indexController);

  indexController.$inject = ['$scope', '$state'];
  function indexController($scope, $state) {
    $scope.text = false;
    $scope.datos = () => {
      $scope.age;
      $scope.id;
      $scope.gender;
      $scope.text = true;
      $scope.asd = ("You are a person of " + $scope.age + " years of age, whose biological " + $scope.gender + " and your marital status is " + $scope.id);
    };
  }
})();
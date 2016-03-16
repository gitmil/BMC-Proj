



angular.module('bmcProj', [])
  .controller('BmcProjController', function($scope) {

      $scope.people = [
        {name: 'Allen Allbrook', email:'A.Allbrook@calbroswervice.com'},
        {name: 'Alien Border' , email:'aborder@Petramco.com'}
      ];

      $scope.test = 1;



   });

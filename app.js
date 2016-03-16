angular.module('bmcProj', ['toaster'])
  .controller('BmcProjController', function(myService, $scope, toaster) {

    $scope.user = {};
    $scope.searched = [];
    $scope.user.affectedUser = "";
    $scope.affectedCompany = ""
    $scope.affectedUser = ""
    $scope.clearAffectedUser = function() {
      $scope.user.affectedUser = "";
      $scope.user.affectedCompany = ""
      $scope.searched = [];
    };

    $scope.selectUser = function(e) {
      $scope.user.affectedCompany = e.company;
      $scope.user.affectedUser = e.name;
      $scope.searched = [];
    };
    $scope.save = function() {
      toaster.pop('success', 'Confirmation Message', 'Saved', 10000, 'trustedHTML');
    };

    $scope.findUser = function() {
      //  console.log($scope.user.affectedUser);
      if ($scope.user.affectedUser === undefined) {
        $scope.searched = [];
      } else {
        myService.async().then(function(d) {
          var sub = $scope.user.affectedUser;
          if (sub === undefined) {
            $scope.searched = [];
          } else {
            var subLen = sub.length;
            $scope.searched = _.filter(d, function(num) {
              return (num.name.substring(0, subLen).toLowerCase() === sub.toLowerCase())
            });
          }
        });
      };
    };

  }).factory('myService', function($http) {
    var myService = {
      async: function() {
        var promise = $http.get('users.json').then(function(response) {
          return response.data;
        });

        return promise;
      }
    };
    return myService;
  });

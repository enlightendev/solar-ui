'use strict';

angular.module('solarUi')
  .controller('MainCtrl', function ($scope, $http) {

    //the form data
    $scope.data = {};

    //saved calculations (input values and result value)
    $scope.calculations = [];

    $scope.submit = function (valid) {

      $http(
        {
          url: 'http://localhost:8080/pv',
          method: 'GET',
          params: {
            FV: $scope.data.future_value,
            r: $scope.data.ror,
            n: $scope.data.periods
          }
        }
      )
        .success(function (data, status, headers, config) {

          console.log(data);
          $scope.calculations.push(data);
          //console.log('submitted' + JSON.stringify($scope.data));
          //$scope.message = $scope.message + ' ' + data.name; // Should log 'foo'
        })
        .error(function (data, status, headers, config) {
          alert(data);
        });

    }

  });

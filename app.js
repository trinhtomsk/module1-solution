(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', checkLunch);

  checkLunch.$inject = ['$scope'];
  function checkLunch($scope) {
    $scope.colors = {};
    $scope.borders = {};
    $scope.lunchItems = "";
    $scope.message = "";

    $scope.checkLunchQuality = function()
    {
      if ($scope.lunchItems != ""){
        $scope.colors.current = "green";
        $scope.borders.current = "solid 1px green";
        var meals = $scope.lunchItems.split(",");
        var total = meals.length;
        var realInput = 0;
        for (var i=0; i < total; i++){
          console.log(meals[i].trim());
          if (meals[i].trim() != "")
            realInput++;
        }
        if (realInput <= 3 && realInput > 0){
          $scope.message = "Enjoy!";

        } else if (realInput > 3) {
          $scope.message = "Too much";
        } else {
          $scope.colors.current =  "red";
          $scope.borders.current = "solid 1px red";
          $scope.message = "Please enter data first!";
        }
      } else {
        $scope.colors.current =  "red";
        $scope.borders.current = "solid 1px red";
        $scope.message = "Please enter data first!";
      }
    }
  }


})();

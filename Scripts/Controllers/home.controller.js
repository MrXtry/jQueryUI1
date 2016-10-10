/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";
            //$scope.value = 37;

            //$("#progressbar").progressbar({
            //    value: $scope.value
            //});

            //$scope.changeValue = function (number) {
            //    $scope.value += number;
            //    $("#progressbar").progressbar("option", "value", $scope.value);
            //    console.log($scope.value);
            //}
        }
    ]);
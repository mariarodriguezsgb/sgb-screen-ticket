'use strict';

angular.module('sgb-prod-manage-ticket', ['megazord'])
    .controller('sgb-prod-manage-ticket-controller', ['$scope', '_router', '_screen', '_screenParams', '_data', '$ionicGesture', '$window', '$interval', function ($scope, _router, _screen, _screenParams, _data, $ionicGesture, $window, $interval) {
        _screen.initialize($scope, _screenParams);

        $scope.prueba = '';
        $scope.ticketGiven=false;

        var element = angular.element(document.getElementById('eventPlaceholder'));
        $ionicGesture.on('dragdown', function (event) {
        	$scope.$apply(function () {
        		$scope.ticketGiven=true;
        	});
        }, element);
    }]);
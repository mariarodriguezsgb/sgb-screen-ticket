(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);

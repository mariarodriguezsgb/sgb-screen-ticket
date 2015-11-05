(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('sgb-prod-manage-ticket', ['megazord'])
    .controller('sgb-prod-manage-ticket-controller', ['$scope', '_router', '_screen', '_screenParams', '_data', '$ionicGesture', '$window', '$interval', function ($scope, _router, _screen, _screenParams, _data, $ionicGesture, $window, $interval) {
        _screen.initialize($scope, _screenParams);

        $scope.data = _data;

        $scope.ticketGiven=false;

        var element = angular.element(document.getElementById('eventPlaceholder'));
        $ionicGesture.on('dragdown', function (event) {
        	$scope.$apply(function () {
        		$scope.ticketGiven=true;
        	});
        }, element);

        //Probando el timer

        /*var defaults = {}
		  , one_second = 1000
		  , one_minute = one_second * 60
		  , one_hour = one_minute * 60
		  , one_day = one_hour * 24
		  , startDate = new Date()
		  , face = document.getElementById('lazy');

		// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
		var requestAnimationFrame = (function() {
		  return window.requestAnimationFrame       || 
		         window.webkitRequestAnimationFrame || 
		         window.mozRequestAnimationFrame    || 
		         window.oRequestAnimationFrame      || 
		         window.msRequestAnimationFrame     || 
		         function( callback ){
		           window.setTimeout(callback, 1000 / 60);
		         };
		}());

		tick();

		function tick() {

		  var now = new Date()
		    , elapsed = now - startDate
		    , parts = [];

		  parts[0] = '' + Math.floor( elapsed / one_hour );
		  parts[1] = '' + Math.floor( (elapsed % one_hour) / one_minute );
		  parts[2] = '' + Math.floor( ( (elapsed % one_hour) % one_minute ) / one_second );

		  parts[0] = (parts[0].length == 1) ? '0' + parts[0] : parts[0];
		  parts[1] = (parts[1].length == 1) ? '0' + parts[1] : parts[1];
		  parts[2] = (parts[2].length == 1) ? '0' + parts[2] : parts[2];

		  face.innerText = parts.join(':');
		  
		  requestAnimationFrame(tick);
		  
		}*/
    }]);

},{}]},{},[1]);

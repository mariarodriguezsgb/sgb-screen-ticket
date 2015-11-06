'use strict';

angular.module('sgb-prod-manage-ticket', ['megazord'])
    .controller('sgb-prod-manage-ticket-controller', ['$scope', '_router', '_screen', '_screenParams', '_data', '$ionicGesture', '$window', '$interval', '$ionicPopup', '$timeout', '$filter', function ($scope, _router, _screen, _screenParams, _data, $ionicGesture, $window, $interval, $ionicPopup, $timeout, $filter) {
        _screen.initialize($scope, _screenParams);

        $scope.data = _data;
        $scope.ticketRequested=false;
        $scope.ticketGenerated = false;
        $scope.ticket = -1;
        $scope.selection = $scope.data.notification;
        
        var element = angular.element(document.getElementById('eventPlaceholder'));
        $ionicGesture.on('dragdown', function (event) {
        	$scope.$apply(function () {
        		$scope.ticketRequested=true;
        		$scope.requestTicket();
        	});
        }, element);

        $scope.changeNotification = function (value) {
        	$scope.ticket = value;
        }

        $scope.requestTicket = function () {
        	$scope.ticket = 255;
        	$timeout(function(){
		    	$scope.ticketGenerated = true;
		    	$scope.ticketRequested = false;
		    }, 1000);
        }

        $scope.deleteTicket = function () {
        	$scope.ticketRequested = false;
        	$scope.ticketGenerated = false;
        	$scope.ticket= -1;
        }

		$scope.showConfirm = function() {
	      var confirmPopupPromise = $ionicPopup.confirm({
	        templateUrl: 'confirmation.html',
	        cancelText: $filter('translate')('negative'),
	        cancelType: 'button-light',
	        okText: $filter('translate')('positive'),
	        okType: 'button-balanced'
	      });
	      
	      confirmPopupPromise.then(function(res) {
	        if (res)
	          $scope.deleteTicket();
	      });
	    };

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
'use strict';
angular.module('movieReservationApp')
    .controller('MainCtrl', function ($scope) {

        // Init layout
        $scope.tickets = [1, 2, 3, 4, 5, 6, 7, 8,9,10];
        $scope.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        $scope.cols = [1, 2, 3, 4, 5, 6, 7, 8];

        // Set reserved and selected
        var reserved = [];
        var selected = [];
        $scope.userInformation = [];
        $scope.ticketsList = [];
        // seat onClick
        $scope.seatClicked = function(seatPos,ticket) {
            var index = selected.indexOf(seatPos);
            if(index != -1) {
                selected.splice(index, 1)
            } 
            else{
            	selected.push(seatPos);
                $scope.ticketsList.push(seatPos);
           }
        }

        $scope.getStatus = function(seatPos) {
            if(reserved.indexOf(seatPos) > -1) {
                return 'reserved';
            } else if(selected.indexOf(seatPos) > -1) {
                return 'selected';
            }
        }

        $scope.retrievedObjectArray =[];
        $scope.saveInformation = function(user) {
            user.seates = selected;
            reserved = selected;
            var newUser = angular.copy(user);
            $scope.retrievedObjectArray.push(newUser);

        }

    });

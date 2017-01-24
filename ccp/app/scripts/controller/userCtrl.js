'use strict';


var app = angular.module('ccp')
app.controller('userCtrl',function($scope, $state, $location, $http) {
    console.log("User Control")
    
    
   
    
    
    $scope.signOut = function signOut() {
        firebase.auth().signOut().then(function () {
            console.log("signout");
            $location.path('/home');
        });
    };
})
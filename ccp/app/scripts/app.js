'use strict';

/**
 * Andrés Muñoz
 *
 * Main module of the application.
 */
 var app = angular.module('ccp', ['ui.router']);

 app.config(function($stateProvider, $urlRouterProvider) {
    console.log("HOLA")
    $urlRouterProvider.otherwise('/home');

    $stateProvider
     .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'base.html'
    })
  .state('home', {
        url: '/home',
        parent: 'base',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
    })  
    .state('user', {
        url: '/user',
        templateUrl: 'views/user.html',
        controller: 'userCtrl'
        })  
   .state('login', {
        url: '/login',
        parent: 'base',
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    })


});

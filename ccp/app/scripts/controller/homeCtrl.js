'use strict';


var app = angular.module('ccp');
app.controller('homeCtrl',function($scope, $state, $location, $http) {
    
    console.log("Controlador")
    var location = $location;
    console.log(location)
    
    var val = false;
   
    //-----------------------------------------------------------------------------------------------------------------------
            
    $scope.confirma = function confirma(){
        var resp = confirm("Be carefull, you're about to enter in a not authorized site. \n Are you an administrator?")
        if(resp == true){
            alert("Welcome back!")
            $location.path('/login');
        }
        else{
            alert("You are not authorized to enter this site");
            $location.path('/home');
        }
    }
    
    $scope.w3_open = function w3_open() {
    var x = document.getElementById("mySidenav");
    var y = document.getElementById("completePageS")
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
            y.style.display = "none";
        } else { 
            x.className = x.className.replace(" w3-show", "");
             y.style.display = "block";
        }
    }


    //==============================================================================================================
    
    $scope.popLogin = function popLogin(){
        document.getElementById('login').style.display="block";
    }
    
    $scope.verification = function verification (){
        
        console.log("verificando")
        var verificacion = $scope.verifications.code;
        if(verificacion == "1143363664"){
            console.log("Code: "+verificacion);
            console.log("Verification success!!")
            var btn = document.getElementById("signin");
            btn.style.display = "block";
            
            document.getElementById("verification").style.display = "none";
            document.getElementById("modalFooter").style.display = "block"
        }
        
    }
    
      function login() {
        
        firebase.auth().signInWithEmailAndPassword($scope.user.username, $scope.user.password)
            .then(function (snapshot) {
            val = true;
            alert("Welcome "+firebase.auth().currentUser.email+", Let's WORK" )
            
        }, function (error) {
            // Handle Errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert("Error:" +errorMessage);
            } else {
                alert("Error:" +errorMessage);
            }
            val = false;
        });
    };
    
     $scope.submit = function submit() {
        login();
        if (val === true){
            $location.path('/user');

        }
    };
    
    $scope.normalize = function normalize(){
       
        var btn = document.getElementById("signin");
        btn.style.display = "none";
        document.getElementById("verification").style.display = "block";
        document.getElementById("modalFooter").style.display = "none";
        
    }
        
    $scope.openRegistration = function openRegistration(){
        
        document.getElementById("registration").style.display = "block";
        
    }
    
    $scope.cancel = function cancel(){
        document.getElementById("check").checked = false;
        document.getElementById("registration").style.display = "none";
        
    }
    
    $scope.redirect = function redirect(){
        $location.path('/login')
    }
    
    $scope.hide1 = function hide1(){
        
        document.getElementById('titulos1').style.display = "none";
        
    }
    
     $scope.hide2 = function hide2(){
        
        document.getElementById('titulos2').style.display = "none";
        
    }
     
      $scope.hide3 = function hide3(){
        
        document.getElementById('titulos3').style.display = "none";
        
    }
    
    
    //-----------------------------------------------------------------------------------------------------------------------
    
    $(document).ready(function(){
    // Add scrollspy to <body>
      $('body').scrollspy({target: ".slidea", offset: 50});   

      // Add smooth scrolling on all links inside the navbar
      $("#header a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
        console.log("header")
          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 500, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        }  // End if
      });
    });
    
    $(document).ready(function(){
    // Add scrollspy to <body>
      $('body').scrollspy({target: ".slidea", offset: 50});   

      // Add smooth scrolling on all links inside the navbar
      $("#footer a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
        console.log("header")
          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 500, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        }  // End if
      });
    });
    
    $(document).ready(function(){
    // Add scrollspy to <body>
      $('body').scrollspy({target: ".slidea", offset: 50});   

      // Add smooth scrolling on all links inside the navbar
      $("#flecha a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
        console.log("header")
          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 500, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        }  // End if
      });
    });
    
    $(document).ready(function(){
    // Add scrollspy to <body>
      $('body').scrollspy({target: ".slidea", offset: 50});   

      // Add smooth scrolling on all links inside the navbar
      $("#mySidenav a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
        console.log("header")
          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 500, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        }  // End if
      });
    });
    

})
'use strict';


var app = angular.module('ccp')
app.controller('loginCtrl',function($scope, $state, $location, $http) {
    
    console.log("Hello!")
    
    
    
    var location = $location;
    $scope.verifications = {
        code: ""
    }
    
    $scope.user = {
        name: '',
        username: '',
        password: ''
    }
    
    $scope.registrationVerify = {
        password:''
    }
    
    $scope.registration = {
        name: '',
        lastName: '',
        gender: ' ',
        age: '',
        identification: '',
        username: '',
        password: '',   
    }
    
    $scope.gender = [
        {
            name:"Male",
        },
        {
            name:"Female",
        }
    ]
    
    
    
    //============================== AUTHENTICATION ================================================
    
    this.getPassword =function(){
            return $scope.user.password;
    };
    
  
    
    function dataVerification(){
        var bool = false;
        if($scope.registration.name != null){ 
            console.log("lenght: "+$scope.registration.age.length === 0)
            if($scope.registration.age.length === 0){
                if($scope.registration.identification!=null){
                    if($scope.registration.lastName!=null){
                        if($scope.registration.password === $scope.registrationVerify.password){
                            bool = true;
                        } 
                        else{
                            console.log("Passwords doesn't match");
                        }
                    }
                    else{
                        console.log("Last name must not be null");
                    }
                }
                else{
                    console.log("Identification must be diferent than null");
                }
            }
            else{
            console.log("It must be greater than 18 years old");
            }
        }
        else{
            console.log("Name must not be null");
        }
    }
    
    $scope.register = function register() {
        
        var data = dataVerification();
        if(data){
            firebase.auth().createUserWithEmailAndPassword($scope.registration.username, $scope.registration.password).then(function (snapshot) {
                snapshot.updateProfile({
                    displayName: $scope.user.name
                }).then(function () {
                    console.log("update done");
                    console.log(snapshot.uid);
                    console.log($scope.user.role);
                    var roleObj = {uid: snapshot.uid, role: $scope.user.role};
                    $http.post("https://localhost:3000/users", roleObj).then(function () {
                        console.log("ok");
                    }).catch(function () {
                        console.log("err");
                    });
                }, function (error) {
                    // An error happened.
                });
            }).catch(function (err) {
                console.log(err);
            });
        } else{
            alert("Incorrect Data")
        }
    }
    
   
    //====================================CHECK=====================================================
    
    $scope.check =function check(){
        
        document.getElementById("accept").style.display = "block";
        document.getElementById("confirmCheck").style.display = "none";
        document.getElementById("cancelCheck").style.display = "block";
        
        
    }
    
     $scope.cancelCheck =function cancelCheck(){
        
        document.getElementById("accept").style.display = "none";
        document.getElementById("confirmCheck").style.display = "block";
        document.getElementById("cancelCheck").style.display = "none";
        
        
    }
    
    //==============================================================================================
    
    var approveVerification = false;
    

    
    $scope.popRegister = function popLogin(){
        document.getElementById('id01').style.display="block";
    }
    
    $scope.registrationMode = function registrationMode(){
        document.getElementById("signUpBtn").style.display = "none"
        document.getElementById("signInBtn").style.display = "block"
        document.getElementById("signin").style.display = "none";
        document.getElementById("signup").style.display = "block";
    }
    
    $scope.signInMode = function signInMode(){
        document.getElementById("signUpBtn").style.display = "block"
        document.getElementById("signin").style.display = "block";
        document.getElementById("signup").style.display = "none";
        document.getElementById("signInBtn").style.display = "none"
    }
    
    $(function(){
        var $select = $(".1-100");
        var i;
        for (i=1;i<=100;i++){
            $select.append($('<option ng-model = "registration.age"></option>').val(i).html(i))
        }
    });
    
    
})
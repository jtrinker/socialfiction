'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */

app.controller('MainCtrl', ['$scope', '$firebase', '$firebaseSimpleLogin', 'authSvc',
  function ($scope, $firebase, $firebaseSimpleLogin, authSvc) {

    var ref = new Firebase('https://socialfiction.firebaseio.com');
    var sync = $firebase(ref);
    $scope.auth = $firebaseSimpleLogin(ref);

    $scope.signin = function() {
      authSvc.signin();
      console.log("signed in!");
    }

    $scope.createUser = function() {
      $scope.auth.$createUser('trinker@gmail.com', 'password').then(function(user, err) {
        if (!err) {
          ref.child('users/' + user.uid).set({
            email: user.email
          });
          console.log("success!");
        }else{
          console.log(err.message);
        }
      });
    }

  }
]);

'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */

app.controller('MainCtrl', ['$scope', '$firebase', '$firebaseSimpleLogin',
  function ($scope, $firebase, $firebaseSimpleLogin) {
    var ref = new Firebase('https://socialfiction.firebaseio.com/');
    var sync = $firebase(ref);

    $scope.auth = $firebaseSimpleLogin(ref);

    $scope.signin = function() {
      console.log("signing in...");
      $scope.auth.$login('password', {
          email: 'jameson.trinker@gmail.com',
          password: 'Gretchen8'
        }).then(function(user) {
          console.log('user: ', user);
        }, function(error) {
          console.log('error: ', error);
        });
    }

    var currentUser = $scope.auth.$getCurrentUser().then(function(user, err) {
      if (err) {
        console.log(err);
      }else{
        console.log(user);
        return user;
      }
    });

    $scope.createUser = function() {
      $scope.auth.$createUser('jamie.smith@email.com', 'password').then(function(user) {
        sync.child('users').child(user.uid).$set({
          email: user.email
        });
      });
    }

  }
]);

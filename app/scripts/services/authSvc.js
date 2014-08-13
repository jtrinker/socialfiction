app.factory('authSvc', ['$firebase', '$firebaseSimpleLogin', function($firebase, $firebaseSimpleLogin) {

  var ref = new Firebase('https://socialfiction.firebaseio.com');
  var sync = $firebase(ref);
  var auth = $firebaseSimpleLogin(ref);

  return {

    logout: function logout() {
      auth.$logout();
    }
  }

}]);
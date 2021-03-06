(function(){
  var app = angular.module('viz', [ ]);

  app.controller('VpcController', [ '$scope', function($scope){

    $scope.vpcs = [ ] 

    var conn = new WebSocket("ws://" + location.host + "/vpc");

    // called when a message is received from the server
    conn.onmessage = function(e){
      $scope.$apply(function(){
        $scope.vpcs = angular.fromJson(e.data).VPCs;
      });
    };

	// Log errors
	conn.onerror = function (error) {
	  console.log('WebSocket Error ' + error);
	};

  }]);


  app.controller('StackController', [ '$scope', function($scope){

    $scope.stacks = [ ] 

    var conn = new WebSocket("ws://" + location.host + "/stack");

    // called when a message is received from the server
    conn.onmessage = function(e){
      $scope.$apply(function(){
        $scope.stacks = angular.fromJson(e.data).Stacks;
      });
    };

	// Log errors
	conn.onerror = function (error) {
	  console.log('WebSocket Error ' + error);
	};

  }]);

})();

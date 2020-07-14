(function(){
'use strict';
angular.module('eatItems',[])
.controller('eatItemsController',eatItemsController);


function eatItemsController ($scope){

	$scope.IsVisible = false;

	$scope.inputitems = ""; 
	

	$scope.printMessage = function () {

		
		var items = $scope.inputitems.split(",");

		var total = items.length;

		console.log(total);
		

		if(total==1){
			if($scope.inputitems==""){
				return("Please enter data first");
			}
			else{
				return("Enjoy!");
			}
			

		}
		
		if(total<4  && total>1){
			return("Enjoy!");
		}
		else if(total >=4){
			return("Too much!");
		}
		
	}

$scope.show = function(){
	$scope.IsVisible = true;
}

$scope.hide = function(){
	$scope.IsVisible = false;
}

}


})();
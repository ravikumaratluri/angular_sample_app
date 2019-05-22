let myApp = angular.module("myapp", []);
let mycontroller = function ($scope) {
    $scope.message = "Hello Angular!";
}
myApp.controller("myController", mycontroller);

let JSONController = function($scope){
    let Student = {
        FirstName : "Ravi Kumar",
        LastName : "Atluri",
        Email:"s534734@nwmissouri.edu"
    }
    $scope.student = Student;
}

myApp.controller("Student", JSONController);
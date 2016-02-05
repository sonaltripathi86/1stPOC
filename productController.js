app.controller('prodController', function ($scope) {
    $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };
  });
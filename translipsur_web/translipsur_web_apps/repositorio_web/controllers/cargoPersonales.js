app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("CargoPersonalCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'descripcion';
    var params = {};
    $scope.lista = [];
    $scope.cargoPersonal = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.CargoPersonal.query(params, function(r) {
            $scope.lista = r;
            //$scope.options = r.options;
            $scope.isLoading = false;
        }, function(err) {
            $log.log("Error in list:" + JSON.stringify(err));
            toastr.error(err.data.results.detail, err.status + ' ' + err.statusText);
        });
    };
    $scope.list(params);

    $scope.buscar = function() {
        params.page = 1;
        params.fields = $scope.fields;
        params.query = $scope.query;
        $scope.list(params);
    };

    $scope.onReorder = function(order) { //TODO
        $log.log('Order: ' + order);
    };

    $scope.delete = function(d) {
        if ($window.confirm("Seguro?")) {
            repositorioService.CargoPersonal.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la cargoPersonal:" + JSON.stringify(d));
                toastr.success('Se eliminó la cargoPersonal ' + d.nombre, 'CargoPersonal');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Categoria
// =========================================================================
.controller("CargoPersonalSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.cargoPersonal = {};

    $scope.buscarPersonal = function(q){
        return repositorioService.Personal.query({query:q}, function(r){
            return r;
        });
    };

    $scope.selectPersonal = function(item){
        $scope.cargoPersonal.personal = item.id;
    };

    
    $scope.sel = function() {
        repositorioService.CargoPersonal.get({ id: $stateParams.id }, function(r) {
            $scope.cargoPersonal = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.cargoPersonal.id) {
            repositorioService.CargoPersonal.update({ id: $scope.cargoPersonal.id }, $scope.cargoPersonal, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la cargoPersonal ' + r.nombre, 'CargoPersonal');
                $state.go('repositorio.repositorio.cargoPersonal');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.CargoPersonal.save($scope.cargoPersonal, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la cargoPersonal ' + r.nombre, 'CargoPersonal');
                $state.go('repositorio.repositorio.cargoPersonal');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.cargoPersonal');
    };
});

app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("DetalleTarifarioCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.detalleTarifario = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.DetalleTarifario.query(params, function(r) {
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
            repositorioService.DetalleTarifario.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la detalleTarifario:" + JSON.stringify(d));
                toastr.success('Se eliminó la detalleTarifario ' + d.nombre, 'DetalleTarifario');
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
.controller("DetalleTarifarioSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.detalleTarifario = {};

    $scope.buscarTarifario = function(q){
        return repositorioService.Tarifario.query({query:q}, function(r){
            return r;
        });
    };

    $scope.selectTarifario = function(item){
        $scope.detalleTarifario.tarifario = item.id;
    };
    

    
    $scope.sel = function() {
        repositorioService.DetalleTarifario.get({ id: $stateParams.id }, function(r) {
            $scope.detalleTarifario = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.detalleTarifario.id) {
            repositorioService.DetalleTarifario.update({ id: $scope.detalleTarifario.id }, $scope.detalleTarifario, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la detalleTarifario ' + r.nombre, 'DetalleTarifario');
                $state.go('repositorio.repositorio.detalleTarifario');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.DetalleTarifario.save($scope.detalleTarifario, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la detalleTarifario ' + r.nombre, 'DetalleTarifario');
                $state.go('repositorio.repositorio.detalleTarifario');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.detalleTarifario');
    };
});

app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("DetalleTiempoAlquilerCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'detalle';
    var params = {};
    $scope.lista = [];
    $scope.detalleTiempoAlquiler = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.DetalleTiempoAlquiler.query(params, function(r) {
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
            repositorioService.DetalleTiempoAlquiler.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la detalleTiempoAlquiler:" + JSON.stringify(d));
                toastr.success('Se eliminó la detalleTiempoAlquiler ' + d.nombre, 'DetalleTiempoAlquiler');
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
.controller("DetalleTiempoAlquilerSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.detalleTiempoAlquiler = {};

    $scope.buscarTiempoAlquiler = function(q){
        return repositorioService.TiempoAlquiler.query({query:q}, function(r){
            return r;
        });
    };

    $scope.selectTiempoAlquiler = function(item){
        $scope.detalleTiempoAlquiler.tiempoAlquiler = item.id;
    };
    
    $scope.sel = function() {
        repositorioService.DetalleTiempoAlquiler.get({ id: $stateParams.id }, function(r) {
            $scope.detalleTiempoAlquiler = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.detalleTiempoAlquiler.id) {
            repositorioService.DetalleTiempoAlquiler.update({ id: $scope.detalleTiempoAlquiler.id }, $scope.detalleTiempoAlquiler, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la detalleTiempoAlquiler ' + r.nombre, 'DetalleTiempoAlquiler');
                $state.go('repositorio.repositorio.detalleTiempoAlquiler');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.DetalleTiempoAlquiler.save($scope.detalleTiempoAlquiler, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la detalleTiempoAlquiler ' + r.nombre, 'DetalleTiempoAlquiler');
                $state.go('repositorio.repositorio.detalleTiempoAlquiler');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.detalleTiempoAlquiler');
    };
});

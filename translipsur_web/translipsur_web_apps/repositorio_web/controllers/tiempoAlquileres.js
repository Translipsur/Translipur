app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("TiempoAlquilerCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'descripcion';
    var params = {};
    $scope.lista = [];
    $scope.tiempoAlquiler = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.TiempoAlquiler.query(params, function(r) {
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
            repositorioService.TiempoAlquiler.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la tiempoAlquiler:" + JSON.stringify(d));
                toastr.success('Se eliminó la tiempoAlquiler ' + d.nombre, 'TiempoAlquiler');
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
.controller("TiempoAlquilerSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.tiempoAlquiler = {};

    $scope.buscarUnidad = function(q){
        return repositorioService.Unidad.query({query:q}, function(r){
            return r;
        });
    };

    $scope.selectUnidad = function(item){
        $scope.tiempoAlquiler.unidad = item.id;
    };
    
    $scope.sel = function() {
        repositorioService.TiempoAlquiler.get({ id: $stateParams.id }, function(r) {
            $scope.tiempoAlquiler = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.tiempoAlquiler.id) {
            repositorioService.TiempoAlquiler.update({ id: $scope.tiempoAlquiler.id }, $scope.tiempoAlquiler, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la tiempoAlquiler ' + r.nombre, 'TiempoAlquiler');
                $state.go('repositorio.repositorio.tiempoAlquiler');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.TiempoAlquiler.save($scope.tiempoAlquiler, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la tiempoAlquiler ' + r.nombre, 'TiempoAlquiler');
                $state.go('repositorio.repositorio.tiempoAlquiler');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.tiempoAlquiler');
    };
});

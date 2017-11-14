app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("DetalleUnidadCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'descripcion';
    var params = {};
    $scope.lista = [];
    $scope.detalleUnidad = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.DetalleUnidad.query(params, function(r) {
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
            repositorioService.DetalleUnidad.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la detalleUnidad:" + JSON.stringify(d));
                toastr.success('Se eliminó la detalleUnidad ' + d.nombre, 'DetalleUnidad');
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
.controller("DetalleUnidadSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.detalleUnidad = {};
    $scope.unidades = [];

    $scope.getData = function(){
        repositorioService.Unidad.query(function(r){
            $scope.unidades = r;
        });
    };

    $scope.getData();






    $scope.buscarProveedor = function(q){
        return repositorioService.Proveedor.query({query:q}, function(r){
            return r;
        });
    };

    $scope.selectProveedor = function(item){
        $scope.detalleUnidad.proveedor = item.id;
    };






    
    $scope.sel = function() {
        repositorioService.DetalleUnidad.get({ id: $stateParams.id }, function(r) {
            $scope.detalleUnidad = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.detalleUnidad.id) {
            repositorioService.DetalleUnidad.update({ id: $scope.detalleUnidad.id }, $scope.detalleUnidad, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la detalleUnidad ' + r.nombre, 'DetalleUnidad');
                $state.go('repositorio.repositorio.detalleUnidad');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.DetalleUnidad.save($scope.detalleUnidad, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la detalleUnidad ' + r.nombre, 'DetalleUnidad');
                $state.go('repositorio.repositorio.detalleUnidad');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.detalleUnidad');
    };
});

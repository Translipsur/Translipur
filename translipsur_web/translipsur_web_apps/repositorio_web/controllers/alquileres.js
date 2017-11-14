app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("AlquilerCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.alquiler = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Alquiler.query(params, function(r) {
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
            repositorioService.Alquiler.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la alquiler:" + JSON.stringify(d));
                toastr.success('Se eliminó la alquiler ' + d.nombre, 'Alquiler');
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
.controller("AlquilerSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.alquiler = {};
    $scope.detalleTiempoAlquileres = [];
    $scope.detalleTarifarios = [];
    $scope.rutas = [];

    $scope.getData = function(){
        repositorioService.DetalleTiempoAlquiler.query(function(r){
            $scope.detalleTiempoAlquileres = r;
        });

        repositorioService.DetalleTarifario.query(function(r){
            $scope.detalleTarifarios = r;
        });

        repositorioService.Ruta.query(function(r){
            $scope.rutas = r;
        });
    };

    $scope.getData();

    $scope.buscarCliente = function(q){
        return repositorioService.Cliente.query({query:q}, function(r){
            return r;
        });
    };

    $scope.selectCliente = function(item){
        $scope.alquiler.cliente = item.id;
    };

    
    $scope.sel = function() {
        repositorioService.Alquiler.get({ id: $stateParams.id }, function(r) {
            $scope.alquiler = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.alquiler.id) {
            repositorioService.Alquiler.update({ id: $scope.alquiler.id }, $scope.alquiler, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la alquiler ' + r.nombre, 'Alquiler');
                $state.go('repositorio.repositorio.alquiler');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Alquiler.save($scope.alquiler, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la alquiler ' + r.nombre, 'Alquiler');
                $state.go('repositorio.repositorio.alquiler');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.alquiler');
    };
});

app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("RutaCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'detalle';
    var params = {};
    $scope.lista = [];
    $scope.ruta = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Ruta.query(params, function(r) {
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
            repositorioService.Ruta.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la ruta:" + JSON.stringify(d));
                toastr.success('Se eliminó la ruta ' + d.nombre, 'Ruta');
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
.controller("RutaSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.ruta = {};

    
    
    $scope.sel = function() {
        repositorioService.Ruta.get({ id: $stateParams.id }, function(r) {
            $scope.ruta = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.ruta.id) {
            repositorioService.Ruta.update({ id: $scope.ruta.id }, $scope.ruta, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la ruta ' + r.nombre, 'Ruta');
                $state.go('repositorio.repositorio.ruta');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Ruta.save($scope.ruta, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la ruta ' + r.nombre, 'Ruta');
                $state.go('repositorio.repositorio.ruta');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.ruta');
    };
});

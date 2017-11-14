app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("UnidadCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'marca';
    var params = {};
    $scope.lista = [];
    $scope.unidad = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Unidad.query(params, function(r) {
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
            repositorioService.Unidad.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la unidad:" + JSON.stringify(d));
                toastr.success('Se eliminó la unidad ' + d.nombre, 'Unidad');
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
.controller("UnidadSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.unidad = {};

    
    $scope.sel = function() {
        repositorioService.Unidad.get({ id: $stateParams.id }, function(r) {
            $scope.unidad = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.unidad.id) {
            repositorioService.Unidad.update({ id: $scope.unidad.id }, $scope.unidad, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la unidad ' + r.nombre, 'Unidad');
                $state.go('repositorio.repositorio.unidad');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Unidad.save($scope.unidad, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la unidad ' + r.nombre, 'Unidad');
                $state.go('repositorio.repositorio.unidad');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.unidad');
    };
});

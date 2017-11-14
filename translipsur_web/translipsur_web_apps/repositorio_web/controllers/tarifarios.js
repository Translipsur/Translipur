app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("TarifarioCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre_tarifario';
    var params = {};
    $scope.lista = [];
    $scope.tarifario = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Tarifario.query(params, function(r) {
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
            repositorioService.Tarifario.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la tarifario:" + JSON.stringify(d));
                toastr.success('Se eliminó la tarifario ' + d.nombre, 'Tarifario');
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
.controller("TarifarioSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.tarifario = {};

        
    $scope.sel = function() {
        repositorioService.Tarifario.get({ id: $stateParams.id }, function(r) {
            $scope.tarifario = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.tarifario.id) {
            repositorioService.Tarifario.update({ id: $scope.tarifario.id }, $scope.tarifario, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la tarifario ' + r.nombre, 'Tarifario');
                $state.go('repositorio.repositorio.tarifario');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Tarifario.save($scope.tarifario, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la tarifario ' + r.nombre, 'Tarifario');
                $state.go('repositorio.repositorio.tarifario');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.tarifario');
    };
});

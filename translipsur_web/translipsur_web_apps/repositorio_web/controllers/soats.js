app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("SoatCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'descripcion';
    var params = {};
    $scope.lista = [];
    $scope.soat = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Soat.query(params, function(r) {
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
            repositorioService.Soat.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la soat:" + JSON.stringify(d));
                toastr.success('Se eliminó la soat ' + d.nombre, 'Soat');
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
.controller("SoatSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.soat = {};

    $scope.buscarUnidad = function(q){
        return repositorioService.Unidad.query({query:q}, function(r){
            return r;
        });
    };

    $scope.selectUnidad = function(item){
        $scope.soat.unidad = item.id;
    };

    
    $scope.sel = function() {
        repositorioService.Soat.get({ id: $stateParams.id }, function(r) {
            $scope.soat = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.soat.id) {
            repositorioService.Soat.update({ id: $scope.soat.id }, $scope.soat, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la soat ' + r.nombre, 'Soat');
                $state.go('repositorio.repositorio.soat');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Soat.save($scope.soat, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la soat ' + r.nombre, 'Soat');
                $state.go('repositorio.repositorio.soat');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.soat');
    };
});

app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("RecepcionUnidadCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'descripcion';
    var params = {};
    $scope.lista = [];
    $scope.recepcionUnidad = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.RecepcionUnidad.query(params, function(r) {
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
            repositorioService.RecepcionUnidad.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la recepcionUnidad:" + JSON.stringify(d));
                toastr.success('Se eliminó la recepcionUnidad ' + d.nombre, 'RecepcionUnidad');
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
.controller("RecepcionUnidadSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.recepcionUnidad = {};

    $scope.alquileres = [];

    $scope.getData = function(){
        repositorioService.Alquiler.query(function(r){
            $scope.alquileres = r;
        });
    };

    $scope.getData();


    $scope.buscarPersona = function(q){
        return repositorioService.Persona.query({query:q}, function(r){
            return r;
        });
    };

    $scope.selectPersona = function(item){
        $scope.recepcionUnidad.persona = item.id;
    };

    
    $scope.sel = function() {
        repositorioService.RecepcionUnidad.get({ id: $stateParams.id }, function(r) {
            $scope.recepcionUnidad = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.recepcionUnidad.id) {
            repositorioService.RecepcionUnidad.update({ id: $scope.recepcionUnidad.id }, $scope.recepcionUnidad, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la recepcionUnidad ' + r.nombre, 'RecepcionUnidad');
                $state.go('repositorio.repositorio.recepcionUnidad');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.RecepcionUnidad.save($scope.recepcionUnidad, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la recepcionUnidad ' + r.nombre, 'RecepcionUnidad');
                $state.go('repositorio.repositorio.recepcionUnidad');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.recepcionUnidad');
    };
});

app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("ClienteCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'descripcion';
    var params = {};
    $scope.lista = [];
    $scope.cliente = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Cliente.query(params, function(r) {
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
            repositorioService.Cliente.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la cliente:" + JSON.stringify(d));
                toastr.success('Se eliminó la cliente ' + d.nombre, 'Cliente');
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
.controller("ClienteSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.cliente = {};

    $scope.buscarPersona = function(q){
        return repositorioService.Persona.query({query:q}, function(r){
            return r;
        });
    };

    $scope.selectPersona = function(item){
        $scope.cliente.persona = item.id;
    };

    
    $scope.sel = function() {
        repositorioService.Cliente.get({ id: $stateParams.id }, function(r) {
            $scope.cliente = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.cliente.id) {
            repositorioService.Cliente.update({ id: $scope.cliente.id }, $scope.cliente, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la cliente ' + r.nombre, 'Cliente');
                $state.go('repositorio.repositorio.cliente');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Cliente.save($scope.cliente, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la cliente ' + r.nombre, 'Cliente');
                $state.go('repositorio.repositorio.cliente');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.cliente');
    };
});

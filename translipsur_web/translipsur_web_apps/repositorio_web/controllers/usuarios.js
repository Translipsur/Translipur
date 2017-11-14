app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("UsuarioCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.usuario = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Usuario.query(params, function(r) {
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
            repositorioService.Usuario.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la usuario:" + JSON.stringify(d));
                toastr.success('Se eliminó la usuario ' + d.nombre, 'Usuario');
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
.controller("UsuarioSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.usuario = {};

    $scope.buscarPersona = function(q){
        return repositorioService.Persona.query({query:q}, function(r){
            return r;
        });
    };

    $scope.selectPersona = function(item){
        $scope.usuario.persona = item.id;
    };

    
    $scope.sel = function() {
        repositorioService.Usuario.get({ id: $stateParams.id }, function(r) {
            $scope.usuario = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.usuario.id) {
            repositorioService.Usuario.update({ id: $scope.usuario.id }, $scope.usuario, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la usuario ' + r.nombre, 'Usuario');
                $state.go('repositorio.repositorio.usuario');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Usuario.save($scope.usuario, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la usuario ' + r.nombre, 'Usuario');
                $state.go('repositorio.repositorio.usuario');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.usuario');
    };
});

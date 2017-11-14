app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("PersonaCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.persona = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Persona.query(params, function(r) {
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
            repositorioService.Persona.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la persona:" + JSON.stringify(d));
                toastr.success('Se eliminó la persona ' + d.nombre, 'Persona');
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
.controller("PersonaSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.persona = {};

    
    $scope.sel = function() {
        repositorioService.Persona.get({ id: $stateParams.id }, function(r) {
            $scope.persona = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.persona.id) {
            repositorioService.Persona.update({ id: $scope.persona.id }, $scope.persona, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la persona ' + r.nombre, 'Persona');
                $state.go('repositorio.repositorio.persona');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Persona.save($scope.persona, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la producto ' + r.nombre, 'Persona');
                $state.go('repositorio.repositorio.persona');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.persona');
    };
});

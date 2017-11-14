app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("PersonalCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.personal = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Personal.query(params, function(r) {
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
            repositorioService.Personal.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la personal:" + JSON.stringify(d));
                toastr.success('Se eliminó la personal ' + d.nombre, 'Personal');
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
.controller("PersonalSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.personal = {};

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
        $scope.personal.persona = item.id;
    };

    
    $scope.sel = function() {
        repositorioService.Personal.get({ id: $stateParams.id }, function(r) {
            $scope.personal = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.personal.id) {
            repositorioService.Personal.update({ id: $scope.personal.id }, $scope.personal, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la personal ' + r.nombre, 'Personal');
                $state.go('repositorio.repositorio.personal');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Personal.save($scope.personal, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la personal ' + r.nombre, 'Personal');
                $state.go('repositorio.repositorio.personal');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.personal');
    };
});

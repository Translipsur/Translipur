app

    .factory("authsService", function($resource, configAuths) {
    var url = configAuths.authsUrl;
    return {
        Log: $resource(url + "logs/:param/", { 'param': '@param' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true }

        }),

                
        
        Persona: $resource(url + "personas/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),

        Usuario: $resource(url + "usuarios/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),

        Proveedor: $resource(url + "proveedores/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),


        DetalleUnidad: $resource(url + "detalleUnidades/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),


        Unidad: $resource(url + "unidades/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),

        Soat: $resource(url + "soats/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),

        Cliente: $resource(url + "clientes/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),

        RecepcionUnidad: $resource(url + "recepcionUnidades/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),

        Personal: $resource(url + "personales/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),

        CargoPersonal: $resource(url + "cargoPersonales/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),


        TiempoAlquiler: $resource(url + "tiempoAlquileres/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),

        Ruta: $resource(url + "rutas/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),

        Tarifario: $resource(url + "tarifarios/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),

        DetalleTiempoAlquiler: $resource(url + "detalleTiempoAlquileres/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),

        DetalleTarifario: $resource(url + "detalleTarifarios/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),

        Alquiler: $resource(url + "alquileres/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": { method: 'GET', isArray: true, params: { query: '@query' } }

        }),


        



        Menu: $resource(url + "menus/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            //"list": { method: 'GET', isArray: false, params: { query: '@query', page: '@page', page_size: '@page_size' } }
            "list": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results : angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options : {
                        "count": 1,
                        "pages": 1,
                        "page": 1,
                        "range": "all",
                        "previous": null,
                        "page_size": 1,
                        "next": null
                    };
                    return { results: results, options: options };
                }
            },
            "options": {
                method: 'OPTIONS',
                isArray: false,
                transformResponse: function(r) {
                    //if (angular.fromJson(r).actions)
                    return angular.fromJson(r).actions.POST;
                }
            }


        }),
        
        Permission: $resource(url + "permissions/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "list": {
                method: 'GET', isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results : angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options : {
                        "count": 1,
                        "pages": 1,
                        "page": 1,
                        "range": "",
                        "previous": null,
                        "page_size": 0,
                        "next": null
                    };
                    return { results: results, options: options };
                }
            },

        }),
        

    };
});



/*
app

.factory("Categoria",function function_name ($http) {
    var url="http://localhost:8000/productos/categorias/";
    return {
        "list": function () {
            return $http.get(url).then(function (r) {
                return r;
            });
        },
        "create":function (d) {
            return $http.post(url,d).then(function (r) {
                return r;
            });
        },
        "get":"list",
        "update":function (id, d) {
            return $http({
                method:"PUT",
                data: d,
                url:url+d.id+"/",

            }).then(function (r) {
                return r;
            });
        },
        "delete":function (d) {
            return $http.delete(url+d.id+"/").then(function (r) {
                return r;
            });
        },
    };
});

app

.controller("categoriaController", function ($scope, Categoria) {
        $scope.list=[];

        $scope.listar = function  () {

            Categoria.list().then(function (r) {
                $scope.list=r.data;
            }, function (err) {
                console.log("Error: " + err);
            });
        };
        $scope.listar();

        $scope.get = function  (d) {

            $scope.categoria = d;
        };

        $scope.save = function  () {
            if($scope.categoria.id){
                Categoria.update({ id: "" }, $scope.categoria).then(function (r) {
                    console.log("update "+r.data);
                    $scope.listar();
                }, function (err) {
                    console.log("Error: " + err);
                });
            }else{
                Categoria.create($scope.categoria).then(function (r) {
                    console.log(r.data);
                    $scope.listar();
                }, function (err) {
                    console.log("Error: " + err);
                });
            }
        };

        $scope.delete = function  (d) {

            Categoria.delete({ id: d.id }).then(function (r) {
                console.log(r.data);
                $scope.listar();
            }, function (err) {
                console.log("Error: " + err);
            });
        };

<div ng-controller="categoriaController">

codigo: <input type="text" ng-model="categoria.codigo"><br>
nombre: <input type="text" ng-model="categoria.nombre"><br>


<button type="submit" ng-click="save()">Save</button>

<table>
<tr ng-repeat="d in list | filter:nombre ">
    <td>
        {{ d.codigo}}
    </td>
    <td>
        {{ d.nombre}}
    </td>
    <td>
        <button ng-click="get(d)">edit</button>
        
    </td>
    <td>
        <button ng-click="delete(d)">x</button>
        
    </td>
</tr>
</table>

<button ng-click="saludo()">Saludar</button>
    </div>


        });
*/
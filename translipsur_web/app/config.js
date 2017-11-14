var baseUrl = 'http://localhost:9000/';
var loginUrl = 'http://localhost:9001/translipsur_web/';


var config = {
    baseUrl: baseUrl,
    loginUrl: loginUrl,
};

app.value('config', config);

app
    

.run(function($rootScope, $state, $stateParams, $window, authService) {
    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    /*******************************agregado**************************/
    //console.log("run");

    authService.fillAuthData();
    if (authService.authentication.isAuth === false) {
        $window.location = loginUrl;
    }
    /******************************************************************/

})


.config(function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
})

/*
angular.module('app').config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function(date) {
       return moment(date).format('YYYY-MM-DD');
    };
});

*/
.config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.shortDays = [
        'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'
    ];

    $mdDateLocaleProvider.formatDate = function(date) {
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return day + '/' + (monthIndex + 1) + '/' + year;
    };
})

.config(
    function($mdIconProvider, $$mdSvgRegistry) {
        // Add default icons from angular material para versiones no estables mayores a v1.0.9
        // la version v1.0.9 no necesita hacer esto
        $mdIconProvider
            .icon('md-close', $$mdSvgRegistry.mdClose)
            .icon('md-menu', $$mdSvgRegistry.mdMenu)
            .icon('md-toggle-arrow', $$mdSvgRegistry.mdToggleArrow);
    }
);



app.constant('ROUTERS_T', [{
    "estado.nombre.1": {
        "url": "/url",
        "data": {
            "section": "Menu name",
            "page": "Menu item name"
        },
        "templateUrl": "appname_web_apps/appname_web/views/model/index.html"
    }

}, {
    "estado.nombre.2": {
        "url": "/url2",
        "data": {
            "section": "Menu name2",
            "page": "Menu item name2"
        },
        "templateUrl": "appname_web_apps/appname_web/views/model2/index.html"
    }

}]);


app.constant('ROUTERS', [{
    "estado.nombre": {
        "url": "/url",
        "data": {
            "section": "Menu name",
            "page": "Menu item name"
        },
        "templateUrl": "appname_web_apps/appname_web/views/model/index.html"
    },

}, {
    "repositorio": {
        "url": "/repositorio",
        "views": {
            "": {
                "templateUrl": "app/views/layout.html"
            },
            "aside": {
                "templateUrl": "app/views/aside.html"
            },
            "content": {
                "templateUrl": "app/views/content.html"
            }
        }
    },
    "repositorio.repositorio": {
        "url": "/repositorio",
        "template": "<div ui-view ></div>"
    }
}, {
    "repositorio.repositorio.persona": {
        "url": "/persona",
        "data": {
            "section": "Repositorio",
            "page": "Personas"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/personas/index.html"
    },
    "repositorio.repositorio.personasNew": {
        "url": "/personas/new",
        "data": {
            "section": "Repositorio",
            "page": "Personas"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/personas/form.html"
    },
    "repositorio.repositorio.personasEdit": {
        "url": "/personas/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Personas"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/personas/form.html"
    }

},  {
    "repositorio.repositorio.usuario": {
        "url": "/usuario",
        "data": {
            "section": "Repositorio",
            "page": "Usuarios"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/usuarios/index.html"
    },
    "repositorio.repositorio.usuariosNew": {
        "url": "/usuarios/new",
        "data": {
            "section": "Repositorio",
            "page": "Usuarios"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/usuarios/form.html"
    },
    "repositorio.repositorio.usuariosEdit": {
        "url": "/usuarios/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Usuarios"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/usuarios/form.html"
    }

},  {
    "repositorio.repositorio.proveedor": {
        "url": "/proveedor",
        "data": {
            "section": "Repositorio",
            "page": "Proveedores"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/proveedores/index.html"
    },
    "repositorio.repositorio.proveedoresNew": {
        "url": "/proveedores/new",
        "data": {
            "section": "Repositorio",
            "page": "Proveedores"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/proveedores/form.html"
    },
    "repositorio.repositorio.proveedoresEdit": {
        "url": "/proveedores/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Proveedores"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/proveedores/form.html"
    }

},  {
    "repositorio.repositorio.detalleUnidad": {
        "url": "/detalleUnidad",
        "data": {
            "section": "Repositorio",
            "page": "DetalleUnidades"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/detalleUnidades/index.html"
    },
    "repositorio.repositorio.detalleUnidadesNew": {
        "url": "/detalleUnidades/new",
        "data": {
            "section": "Repositorio",
            "page": "DetalleUnidades"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/detalleUnidades/form.html"
    },
    "repositorio.repositorio.detalleUnidadesEdit": {
        "url": "/detalleUnidades/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "DetalleUnidades"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/detalleUnidades/form.html"
    }

},  {
    "repositorio.repositorio.unidad": {
        "url": "/unidad",
        "data": {
            "section": "Repositorio",
            "page": "Unidades"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/unidades/index.html"
    },
    "repositorio.repositorio.unidadesNew": {
        "url": "/unidades/new",
        "data": {
            "section": "Repositorio",
            "page": "Unidades"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/unidades/form.html"
    },
    "repositorio.repositorio.unidadesEdit": {
        "url": "/unidades/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Unidades"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/unidades/form.html"
    }

},  {
    "repositorio.repositorio.soat": {
        "url": "/soat",
        "data": {
            "section": "Repositorio",
            "page": "Soats"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/soats/index.html"
    },
    "repositorio.repositorio.soatsNew": {
        "url": "/soats/new",
        "data": {
            "section": "Repositorio",
            "page": "Soats"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/soats/form.html"
    },
    "repositorio.repositorio.soatsEdit": {
        "url": "/soats/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Soats"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/soats/form.html"
    }

},  {
    "repositorio.repositorio.cliente": {
        "url": "/cliente",
        "data": {
            "section": "Repositorio",
            "page": "Clientes"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/clientes/index.html"
    },
    "repositorio.repositorio.clientesNew": {
        "url": "/clientes/new",
        "data": {
            "section": "Repositorio",
            "page": "Clientes"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/clientes/form.html"
    },
    "repositorio.repositorio.clientesEdit": {
        "url": "/clientes/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Clientes"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/clientes/form.html"
    }

},  {
    "repositorio.repositorio.recepcionUnidad": {
        "url": "/recepcionUnidad",
        "data": {
            "section": "Repositorio",
            "page": "RecepcionUnidades"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/recepcionUnidades/index.html"
    },
    "repositorio.repositorio.recepcionUnidadesNew": {
        "url": "/recepcionUnidades/new",
        "data": {
            "section": "Repositorio",
            "page": "RecepcionUnidades"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/recepcionUnidades/form.html"
    },
    "repositorio.repositorio.recepcionUnidadesEdit": {
        "url": "/recepcionUnidades/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "RecepcionUnidades"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/recepcionUnidades/form.html"
    }

},  {
    "repositorio.repositorio.personal": {
        "url": "/personal",
        "data": {
            "section": "Repositorio",
            "page": "Personales"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/personales/index.html"
    },
    "repositorio.repositorio.personalesNew": {
        "url": "/personales/new",
        "data": {
            "section": "Repositorio",
            "page": "Personales"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/personales/form.html"
    },
    "repositorio.repositorio.personalesEdit": {
        "url": "/personales/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Personales"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/personales/form.html"
    }

},  {
    "repositorio.repositorio.cargoPersonal": {
        "url": "/cargoPersonal",
        "data": {
            "section": "Repositorio",
            "page": "CargoPersonales"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/cargoPersonales/index.html"
    },
    "repositorio.repositorio.cargoPersonalesNew": {
        "url": "/cargoPersonales/new",
        "data": {
            "section": "Repositorio",
            "page": "CargoPersonales"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/cargoPersonales/form.html"
    },
    "repositorio.repositorio.cargoPersonalesEdit": {
        "url": "/cargoPersonales/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "CargoPersonales"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/cargoPersonales/form.html"
    }

},  {
    "repositorio.repositorio.tiempoAlquiler": {
        "url": "/tiempoAlquiler",
        "data": {
            "section": "Repositorio",
            "page": "TiempoAlquileres"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/tiempoAlquileres/index.html"
    },
    "repositorio.repositorio.tiempoAlquileresNew": {
        "url": "/tiempoAlquileres/new",
        "data": {
            "section": "Repositorio",
            "page": "TiempoAlquileres"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/tiempoAlquileres/form.html"
    },
    "repositorio.repositorio.tiempoAlquileresEdit": {
        "url": "/tiempoAlquileres/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "TiempoAlquileres"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/tiempoAlquileres/form.html"
    }

},  {
    "repositorio.repositorio.ruta": {
        "url": "/ruta",
        "data": {
            "section": "Repositorio",
            "page": "Rutas"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/rutas/index.html"
    },
    "repositorio.repositorio.rutasNew": {
        "url": "/rutas/new",
        "data": {
            "section": "Repositorio",
            "page": "Rutas"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/rutas/form.html"
    },
    "repositorio.repositorio.rutasEdit": {
        "url": "/rutas/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Rutas"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/rutas/form.html"
    }

},  {
    "repositorio.repositorio.tarifario": {
        "url": "/tarifario",
        "data": {
            "section": "Repositorio",
            "page": "Tarifarios"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/tarifarios/index.html"
    },
    "repositorio.repositorio.tarifariosNew": {
        "url": "/tarifarios/new",
        "data": {
            "section": "Repositorio",
            "page": "Tarifarios"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/tarifarios/form.html"
    },
    "repositorio.repositorio.tarifariosEdit": {
        "url": "/tarifarios/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Tarifarios"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/tarifarios/form.html"
    }

},  {
    "repositorio.repositorio.detalleTiempoAlquiler": {
        "url": "/detalleTiempoAlquiler",
        "data": {
            "section": "Repositorio",
            "page": "DetalleTiempoAlquileres"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/detalleTiempoAlquileres/index.html"
    },
    "repositorio.repositorio.detalleTiempoAlquileresNew": {
        "url": "/detalleTiempoAlquileres/new",
        "data": {
            "section": "Repositorio",
            "page": "DetalleTiempoAlquileres"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/detalleTiempoAlquileres/form.html"
    },
    "repositorio.repositorio.detalleTiempoAlquileresEdit": {
        "url": "/detalleTiempoAlquileres/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "DetalleTiempoAlquileres"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/detalleTiempoAlquileres/form.html"
    }

},  {
    "repositorio.repositorio.detalleTarifario": {
        "url": "/detalleTarifario",
        "data": {
            "section": "Repositorio",
            "page": "DetalleTarifarios"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/detalleTarifarios/index.html"
    },
    "repositorio.repositorio.detalleTarifariosNew": {
        "url": "/detalleTarifarios/new",
        "data": {
            "section": "Repositorio",
            "page": "DetalleTarifarios"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/detalleTarifarios/form.html"
    },
    "repositorio.repositorio.detalleTarifariosEdit": {
        "url": "/detalleTarifarios/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "DetalleTarifarios"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/detalleTarifarios/form.html"
    }

},  {
    "repositorio.repositorio.alquiler": {
        "url": "/alquiler",
        "data": {
            "section": "Repositorio",
            "page": "Alquileres"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/alquileres/index.html"
    },
    "repositorio.repositorio.alquileresNew": {
        "url": "/alquileres/new",
        "data": {
            "section": "Repositorio",
            "page": "Alquileres"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/alquileres/form.html"
    },
    "repositorio.repositorio.alquileresEdit": {
        "url": "/alquileres/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Alquileres"
        },
        "templateUrl": "translipsur_web_apps/repositorio_web/views/alquileres/form.html"
    }

}
]);

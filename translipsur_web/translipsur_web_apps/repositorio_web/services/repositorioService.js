app

    .factory("repositorioService", function($resource, configRepositorio) {
    var url = configRepositorio.repositorioUrl;
    return {

        
        
        Persona: $resource(url + "personas/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),        

        Usuario: $resource(url + "usuarios/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),        

        Proveedor: $resource(url + "proveedores/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),        

        DetalleUnidad: $resource(url + "detalleUnidades/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),       

        Unidad: $resource(url + "unidades/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),       

        Soat: $resource(url + "soats/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),       

        Cliente: $resource(url + "clientes/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),       

        RecepcionUnidad: $resource(url + "recepcionUnidades/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),       


        Personal: $resource(url + "personales/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),       

        CargoPersonal: $resource(url + "cargoPersonales/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),       

        TiempoAlquiler: $resource(url + "tiempoAlquileres/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),       

        Ruta: $resource(url + "rutas/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),       

        Tarifario: $resource(url + "tarifarios/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),       

        DetalleTiempoAlquiler: $resource(url + "detalleTiempoAlquileres/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),       

        DetalleTarifario: $resource(url + "detalleTarifarios/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),       
        Alquiler: $resource(url + "alquileres/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),       


        

    };
});

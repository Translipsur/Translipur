from django.contrib import admin


from .models.persona import Persona
from .models.usuario import Usuario
from .models.proveedor import Proveedor
from .models.detalleUnidad import DetalleUnidad
from .models.unidad import Unidad
from .models.soat import Soat
from .models.cliente import Cliente

from .models.recepcionUnidad import RecepcionUnidad
from .models.personal import Personal
from .models.cargoPersonal import CargoPersonal
from .models.tiempoAlquiler import TiempoAlquiler
from .models.ruta import Ruta
from .models.tarifario import Tarifario
from .models.detalleTiempoAlquiler import DetalleTiempoAlquiler
from .models.detalleTarifario import DetalleTarifario
from .models.alquiler import Alquiler


# Register your models here.


class PersonaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'ape_paterno', 'ape_materno', 'dni',
                    'ruc', 'celular', 'tipo_persona', 'direccion', 'departamento', 'provincia', 'distrito')
    search_fields = ('nombre', 'ape_paterno', 'ape_materno', 'dni',
                     'ruc', 'celular', 'tipo_persona', 'direccion', 'departamento', 'provincia', 'distrito')
    list_per_page = 3


admin.site.register(Persona, PersonaAdmin)


class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('user', 'password', 'estado')
    search_fields = ('user', )
    list_per_page = 3


admin.site.register(Usuario, UsuarioAdmin)


class ProveedorAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'pagina_web', 'estado')
    search_fields = ('nombre', 'pagina_web')
    list_per_page = 3

admin.site.register(Proveedor, ProveedorAdmin)


admin.site.register(DetalleUnidad)


class UnidadAdmin(admin.ModelAdmin):
    list_display = ('marca', 'placa', 'color', 'tipo_combustible', 'ruedas', 'altura', 'ancho', 'tipo', 'cilindros', 'ejes', 'nro_motor',
                    'km_recorrido', 'ano_modelo', 'asientos', 'carga_util', 'longitud', 'nro_serie', 'pasajeros', 'peso_bruto', 'peso_seco')
    search_fields = ('marca', 'placa', 'color', 'tipo_combustible', 'ruedas', 'altura', 'ancho', 'tipo', 'cilindros', 'ejes', 'nro_motor',
                     'km_recorrido', 'ano_modelo', 'asientos', 'carga_util', 'longitud', 'nro_serie', 'pasajeros', 'peso_bruto', 'peso_seco')
    list_per_page = 3

admin.site.register(Unidad, UnidadAdmin)


class SoatAdmin(admin.ModelAdmin):
    list_display = ('descripcion', 'estado', 'unidad')
    search_fields = ('descripcion', 'unidad')
    list_per_page = 3

admin.site.register(Soat, SoatAdmin)


class ClienteAdmin(admin.ModelAdmin):
    list_display = ('descripcion', 'estado', 'persona')
    search_fields = ('descripcion', 'persona')
    list_per_page = 3

admin.site.register(Cliente, ClienteAdmin)


class RecepcionUnidadAdmin(admin.ModelAdmin):
    list_display = ('descripcion', 'tipo_recepcion',
                    'unidad_entrega', 'persona', 'alquiler')
    search_fields = ('descripcion', 'tipo_recepcion',
                     'unidad_entrega', 'persona')
    list_per_page = 3

admin.site.register(RecepcionUnidad, RecepcionUnidadAdmin)


class PersonalAdmin(admin.ModelAdmin):
    list_display = ('categoria', 'estado', 'persona', 'alquiler')
    search_fields = ('categoria',)
    list_per_page = 3

admin.site.register(Personal, PersonalAdmin)


class CargoPersonalAdmin(admin.ModelAdmin):
    list_display = ('descripcion', 'funcion', 'estado', 'personal')
    search_fields = ('descripcion', 'funcion', )
    list_per_page = 3

admin.site.register(CargoPersonal, CargoPersonalAdmin)


class TiempoAlquilerAdmin(admin.ModelAdmin):
    list_display = ('descripcion', 'unidad')
    search_fields = ('descripcion',)
    list_per_page = 3

admin.site.register(TiempoAlquiler, TiempoAlquilerAdmin)


class RutaAdmin(admin.ModelAdmin):
    list_display = ('detalle', 'distancia_km', 'lugar_origen', 'lugar_destino')
    search_fields = ('detalle', 'lugar_origen', 'lugar_destino')
    list_per_page = 3

admin.site.register(Ruta, RutaAdmin)


class TarifarioAdmin(admin.ModelAdmin):
    list_display = ('nombre_tarifario', 'cantidad_alquiler',
                    'costo', 'descripcion', 'unidad_medida')
    search_fields = ('nombre_tarifario', 'cantidad_alquiler', 'unidad_medida')
    list_per_page = 3

admin.site.register(Tarifario, TarifarioAdmin)


class DetalleTiempoAlquilerAdmin(admin.ModelAdmin):
    list_display = ('detalle', 'tiempoAlquiler')
    search_fields = ('detalle', )
    list_per_page = 3

admin.site.register(DetalleTiempoAlquiler, DetalleTiempoAlquilerAdmin)


class DetalleTarifarioAdmin(admin.ModelAdmin):
    list_display = ('detalle', 'tarifario')
    search_fields = ('detalle', )
    list_per_page = 3

admin.site.register(DetalleTarifario, DetalleTarifarioAdmin)


class AlquilerAdmin(admin.ModelAdmin):
    list_display = ('detalle', 'detalleTiempoAlquiler',
                    'detalleTarifario', 'ruta', 'cliente')
    search_fields = ('detalle', )
    list_per_page = 3

admin.site.register(Alquiler, AlquilerAdmin)

from django.conf.urls import url, include
from rest_framework import routers


from .persona_view import PersonaViewSet
from .usuario_view import UsuarioViewSet
from .proveedor_view import ProveedorViewSet
from .detalleUnidad_view import DetalleUnidadViewSet
from .unidad_view import UnidadViewSet
from .soat_view import SoatViewSet
from .cliente_view import ClienteViewSet
from .recepcionUnidad_view import RecepcionUnidadViewSet
from .personal_view import PersonalViewSet
from .cargoPersonal_view import CargoPersonalViewSet
from .tiempoAlquiler_view import TiempoAlquilerViewSet
from .ruta_view import RutaViewSet
from .tarifario_view import TarifarioViewSet
from .detalleTiempoAlquiler_view import DetalleTiempoAlquilerViewSet
from .detalleTarifario_view import DetalleTarifarioViewSet
from .alquiler_view import AlquilerViewSet


router = routers.DefaultRouter()


router.register(r'personas', PersonaViewSet)
router.register(r'usuarios', UsuarioViewSet)
router.register(r'proveedores', ProveedorViewSet)
router.register(r'detalleUnidades', DetalleUnidadViewSet)
router.register(r'unidades', UnidadViewSet)
router.register(r'soats', SoatViewSet)
router.register(r'clientes', ClienteViewSet)
router.register(r'recepcionUnidades', RecepcionUnidadViewSet)
router.register(r'personales', PersonalViewSet)
router.register(r'cargoPersonales', CargoPersonalViewSet)
router.register(r'tiempoAlquileres', TiempoAlquilerViewSet)
router.register(r'rutas', RutaViewSet)
router.register(r'tarifarios', TarifarioViewSet)
router.register(r'detalleTiempoAlquileres', DetalleTiempoAlquilerViewSet)
router.register(r'detalleTarifarios', DetalleTarifarioViewSet)
router.register(r'alquileres', AlquilerViewSet)


urlpatterns = [

    url(r'^', include(router.urls)),

]

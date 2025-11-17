🧾 Auditoría — Semana 3

Grupo Nº: 10

Tema asignado: Sistema de Gestión de Donaciones ONG

Integrantes (Nombre completo + Legajo):

Bazan Marcos Facundo 61253

Fernandez Cesar Julian 61396

Jorge Emir 61604

1) RELEVAMIENTO — Antes de comenzar a trabajar

Describir brevemente lo encontrado al abrir el proyecto:

Errores detectados (bugs, warnings, import fallidos, rutas rotas, etc.)

Punto de entrada duplicado: Se detectaron dos archivos (index.js y app.js en la raíz) que inicializaban un servidor de Express, creando confusión sobre el punto de entrada real.

Acoplamiento Fuerte de la Base de Datos: Los controladores importaban la conexión mysql2 (db) directamente.

Uso de SQL Crudo (Raw SQL): Toda la lógica de negocio estaba mezclada con sentencias SQL manuales (db.query(...)), acoplando la aplicación a mysql2.

Faltantes respecto a Semana 1 (carpetas vacías, componentes incompletos, etc.)

Ausencia de arquitectura de proyecto (TP2): El grupo anterior no implementó la estructura de carpetas solicitada en la Semana 2. El proyecto carecía de una carpeta src y la lógica estaba desorganizada en la raíz.

Problemas de estructura, naming, uso de git o dependencias

Estructura de carpetas duplicada y caótica: Se detectaron múltiples carpetas con propósitos similares en la raíz (routes/ vs src/routes/, utils/ vs src/utils/).

Duplicación de Utilidades: Se encontraron múltiples archivos para la misma función (ej. dos servicios de email, dos archivos de hash de contraseñas).

Naming inconsistente: (ej. Middleware/ vs middlewares/).

Este apartado describe el estado en que se recibió el proyecto ANTES de cualquier modificación.

2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO (Semana 3)

✅ Soluciones aplicadas a problemas detectados

Re-estructuración de la Arquitectura (Resolución de TP2): Antes de iniciar con la migración a Prisma, se solucionó la deuda técnica del TP2, implementando la arquitectura correcta:

Se creó la carpeta src/ para albergar toda la lógica de la aplicación.

Se definió index.js (global) como el único responsable de levantar el servidor (app.listen()).

Se creó src/app.js como el "cerebro" de la aplicación, donde se configura Express, cors y los middlewares globales.

Se centralizó el enrutamiento creando src/routes/index.js, que actúa como "distribuidor" principal hacia las rutas específicas (ej. donadores.route.js, productos.route.js).

Consolidación de Estructura: Se eliminaron todas las carpetas y archivos duplicados de la raíz (app.js, config/, utils/ de la raíz, etc.).

Unificación de Utilidades: Se eliminaron los archivos de utilidades duplicados, dejando una única fuente de verdad para el hasheo y el envío de correos.

✅ Nuevos requerimientos de Semana 3 agregados

Implementación de Prisma ORM (Backend):

Introspección de BD: Se utilizó el ong.sql para levantar la BD en MySQL. Se ejecutó npx prisma db pull para introspectar la estructura y generar todos los modelos (usuarios, donadores, productos, comedores, entregas) en prisma/schema.prisma.

Generación del Cliente: Se ejecutó npx prisma generate para crear el cliente de Prisma.

Conexión Centralizada: Se creó src/config/prisma.js (ahora dentro de src/), que exporta la instancia única de PrismaClient para reemplazar al antiguo config/db.js.

Refactorización Completa de Controladores: Se reescribieron todos los controladores (en src/controllers/) para eliminar las consultas db.query() y utilizar los métodos del cliente Prisma (ej. prisma.usuarios.findUnique(), prisma.donantes.findMany()).

Observaciones finales (opcional)

Como realizamos el TP:
Con el equipo decidimos dividir el trabajo para tratar de agilizar lo mas posible el tp y llegar a tiempo con la entrega. La division fue la siguiente el lider de grupo (Facundo Bazan) se hizo cargo de arreglar, modular y realizar las integraciones correspondientes al tp en el backEnd (que vimos que esta hecho un desastre). Los otros dos miembros del equipo (Julian Fernandez y Emir Jorge) se hicieron cargo de todo el frontEnd. Y la unificacion de todo lo hicimos en conjunto los 3.

Conflictos: 
Emir Jorge tuvo un problema con su pc con el programa de oneDrive, el cual no le permitia modificar la carpeta por la seguridad de windows. Eso provoco que el no pudiece y traer y subir ningun cambio a al repositorio, por lo tanto tuvo que pasarle los archivos del frontEnd que el realizo a Julian Fernandez para que el subiera a su rama todo el frontEnd completo. No tuvo tiempo para poder solucionar el problema de su pc.
Al Lider del grupo le llevo mas tiempo de lo esperado debido a la cantidad de archivos duplicados y a la inconsistencia de datos. 

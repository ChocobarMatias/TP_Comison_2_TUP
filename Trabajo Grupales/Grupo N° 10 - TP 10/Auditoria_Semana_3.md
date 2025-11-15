🧾 Auditoría — Semana 3

Grupo Nº: 10

Tema asignado: Sistema de Gestión de Donaciones ONG

Integrantes (Nombre completo + Legajo):

... (Completar por el alumno)

... (Completar por el alumno)

... (Completar por el alumno)

1) RELEVAMIENTO — Antes de comenzar a trabajar

Describir brevemente lo encontrado al abrir el proyecto:

Errores detectados (bugs, warnings, import fallidos, rutas rotas, etc.)

Punto de entrada duplicado: Existen dos archivos (index.js y app.js) que inicializan un servidor de Express de forma independiente. Ambos importan y configuran rutas, creando confusión sobre cuál es el verdadero punto de entrada.

Revisión de package.json: Se confirma que el script dev (node --watch index.js) solo ejecuta index.js, por lo que app.js funciona como "código muerto" o zombie.

Acoplamiento Fuerte de la Base de Datos: Los controladores (ej. src/controllers/usuarios.js, src/controllers/recuperoPass.js) importan la conexión mysql2 (db) directamente desde config/db.js.

Uso de SQL Crudo (Raw SQL): Toda la lógica de negocio está mezclada con sentencias SQL manuales (ej. db.query("SELECT * FROM usuarios..."), db.query("INSERT INTO...")). Esto acopla fuertemente la aplicación a mysql2, dificulta el mantenimiento y es propenso a errores de sintaxis SQL.

Lógica de Migración Obsoleta: El archivo routes/migration.route.js revela un intento manual de crear la base de datos y las tablas a través de endpoints API, una práctica que es insegura y no estándar.

Faltantes respecto a Semana 1 (carpetas vacías, componentes incompletos, etc.)

(Este apartado depende de lo que haya entregado el grupo anterior, pero el principal "faltante" es la correcta implementación de una capa de abstracción de datos como un ORM).

Problemas de estructura, naming, uso de git o dependencias

Estructura de carpetas duplicada y caótica: Se detectan múltiples carpetas con propósitos similares, lo que genera confusión.

routes/ (en la raíz) vs. src/routes/

config/ (en la raíz) vs. src/config/

utils/ (en la raíz) vs. src/utils/

Duplicación de Utilidades: Se encontraron múltiples archivos que cumplen la misma función, creando confusión sobre cuál debe usarse. Ejemplos:

src/utils/hash.js (con bcrypt) vs. utils/hashPass.js (con bcryptjs).

src/services/email.js (servicio genérico) vs. utils/serivicoDeEmail.js (servicio específico con plantillas HTML).

Naming inconsistente: Existen carpetas duplicadas con diferencias de mayúsculas/minúsculas (ej. Middleware/ y middlewares/).

Dependencias: El proyecto lista mysql2 como dependencia principal para la conexión a la base de datos, confirmando la falta de un ORM.

Este apartado debe completarse ANTES de modificar el código.

2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO (Semana 3)

✅ Soluciones aplicadas a problemas detectados

Centralización del Servidor: Se definió index.js como el único punto de entrada del servidor. Se eliminó el archivo app.js para evitar duplicidad y confusión.

Consolidación de Estructura: Se unificó la estructura del proyecto. Se decidió trabajar sobre las carpetas raíz (/routes, /config, /utils) y se eliminaron las carpetas duplicadas bajo el directorio /src.

Unificación de Utilidades: Se eliminaron los archivos de utilidades duplicados. Se estandarizó el uso de utils/hashPass.js (para bcryptjs) y utils/serivicoDeEmail.js (para nodemailer), eliminando src/utils/hash.js y src/services/email.js.

Limpieza de Rutas Obsoletas: Se eliminó el archivo routes/migration.route.js y su controlador asociado, ya que la introspección de la base de datos ahora es manejada por Prisma.

✅ Nuevos requerimientos de Semana 3 agregados

Implementación de Prisma ORM (Backend):

Introspección de BD: Se utilizó el ong.sql provisto para levantar la base de datos en MySQL. Posteriormente, se ejecutó npx prisma db pull para introspectar la estructura y generar todos los modelos (usuarios, donadores, productos, comedores, entregas) en el archivo prisma/schema.prisma.

Generación del Cliente: Se ejecutó npx prisma generate para crear el cliente de Prisma en node_modules/@prisma/client.

Conexión Centralizada: Se creó el archivo config/prisma.js, que exporta una instancia única de PrismaClient. Este archivo reemplaza funcionalmente al obsoleto config/db.js (que usaba mysql2).

Refactorización Completa de Controladores: Se reescribieron todos los controladores (ej. usuarios.js, recuperoPass.js, donadores.controller.js, etc.) para eliminar por completo las consultas SQL crudas (db.query). En su lugar, toda la lógica de acceso a datos ahora utiliza los métodos del cliente Prisma (ej. prisma.usuarios.findUnique(), prisma.donantes.findMany(), prisma.productos.create(), prisma.entregas.update()).

Observaciones finales (opcional)

(Completar por el alumno: Comentarios sobre el flujo de trabajo, dificultades o acuerdos del equipo).



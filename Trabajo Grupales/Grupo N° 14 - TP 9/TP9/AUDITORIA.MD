
Se realizó la migración del acceso a datos del proyecto para implementar Prisma como ORM (Object-Relational Mapping).

Instalación y Configuración: Se instalaron las dependencias prisma y @prisma/client. Luego, se ejecutó npx prisma init para crear la carpeta /prisma y el archivo de esquema inicial.

Conexión: Se configuró la variable DATABASE_URL en el archivo .env para apuntar a la base de datos MySQL existente.

Introspección : Se utilizó el comando npx prisma db pull. Este comando analizó la estructura de la base de datos MySQL (tablas, columnas, tipos de datos, relaciones) y generó automáticamente los modelos correspondientes dentro del archivo schema.prisma.

Generación del Cliente: Una vez definidos los modelos, se ejecutó npx prisma generate. Esto creó el cliente de Prisma optimizado (@prisma/client) que nos permite interactuar con la base de datos usando JavaScript/TypeScript de forma moderna y segura.

Centralización: (Opcional) Se creó un archivo /config/prisma.js que exporta una única instancia de PrismaClient. Esto nos permite importar y reutilizar la misma conexión en todos los controladores, siguiendo las buenas prácticas.


Captira de npx prisma db pull y npx prisma generate
![](image.png)
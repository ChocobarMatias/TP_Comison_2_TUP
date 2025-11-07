# 🧾 Auditoría — Semana 3  
### Grupo Nº: 11  
### Tema asignado: Sistema de Gestión de Turnos  
### Integrantes (Nombre completo + Legajo):
- Prieto Juan Maximiliano - 61942


---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

Describir brevemente lo encontrado al abrir el proyecto:

- **Errores detectados:** 

  - Mezcla de CommonJS y ES Modules en diferentes archivos
  - Faltaba archivo .env con configuración de base de datos
  - No había datos de prueba en la base de datos

- **Faltantes respecto a Semana 1:**
  - Faltaba script SQL para inicializar la base de datos
  - No había datos de prueba en la base de datos

- **Problemas de estructura:**
  - Inconsistencia entre require/module.exports e import/export

---

## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados

**Migración a Prisma ORM:**
- Instalado y configurado Prisma ORM
- Creado `prisma/schema.prisma` con los modelos de la base de datos
- Generado cliente Prisma con `npx prisma generate`
- Ejecutado `npx prisma db pull` para introspección de la BD

**Conversión a ES Modules:**
- Convertidos todos los archivos de CommonJS a ES Modules
- Agregado `"type": "module"` en package.json
- Actualizado imports en controllers, routes y config

**Archivos modificados:**
- `src/config/prismo.js` - Nueva configuración del cliente Prisma
- `src/config/dataBase.js` - Código comentado (ya no se usa)
- `src/controllers/clientes.js` - Migrado a Prisma
- `src/controllers/serviciosController.js` - Migrado a Prisma
- `src/controllers/Turnos.js` - Migrado a Prisma con relaciones
- `src/controllers/auth.controller.js` - Migrado a Prisma
- `src/routes/*.js` - Todas convertidas a ES Modules

**Base de datos:**
- Creado `database.sql` con:
  - Estructura completa de tablas (Users, Clientes, servicios, turnos)
  - Datos de prueba: 5 usuarios, 15 clientes, 15 servicios, 40 turnos

### ✅ Nuevos requerimientos de Semana 2 agregados
- Implementación completa de Prisma ORM
- Estandarización del código a ES Modules
- Script SQL con datos de prueba
- Configuración de prisma.config.ts con variables de entorno

**Comandos ejecutados:**
```bash
npx prisma db pull
npx prisma generate
nodemon
```

---

## Observaciones finales

**Problemas resueltos durante la implementación:**
- Conflicto entre CommonJS y ES Modules
- Configuración de DATABASE_URL en .env para Prisma

**Estado final:**
Proyecto completamente funcional con Prisma ORM, todos los controladores migrando exitosamente y endpoints testeados con Thunder Client.

**terminal con comandos**


 npx prisma db pull
Loaded Prisma config from prisma.config.ts.

Prisma config detected, skipping environment variable loading.
Prisma schema loaded from prisma\schema.prisma
Datasource "db": MySQL database "gestion_turnos" at "localhost:3306"

✔ Introspected 4 models and wrote them into prisma\schema.prisma in 1.47s

Run prisma generate to generate Prisma Client.

PS C:\Users\juanm\OneDrive\Desktop\Nueva carpeta\TP_Comison_2_TUP\Trabajo Grupales\Grupo N° 11 - TP 2> npx prisma generate
Loaded Prisma config from prisma.config.ts.

Prisma config detected, skipping environment variable loading.
Prisma schema loaded from prisma\schema.prisma

✔ Generated Prisma Client (6.19.0) to .\src\generated\prisma in 98ms

PS C:\Users\juanm\OneDrive\Desktop\Nueva carpeta\TP_Comison_2_TUP\Trabajo Grupales\Grupo N° 11 - TP 2>











Loaded Prisma config from prisma.config.ts.

Prisma config detected, skipping environment variable loading.
Prisma schema loaded from prisma\schema.prisma

✔ Generated Prisma Client (6.19.0) to .\src\generated\prisma in 98ms

PS C:\Users\juanm\OneDrive\Desktop\Nueva carpeta\TP_Comison_2_TUP\Trabajo Grupales\Grupo N° 11 - TP 2>




Loaded Prisma config from prisma.config.ts.

Prisma config detected, skipping environment variable loading.
Prisma schema loaded from prisma\schema.prisma

✔ Generated Prisma Client (6.19.0) to .\src\generated\prisma in 98ms

Loaded Prisma config from prisma.config.ts.

Prisma config detected, skipping environment variable loading.
Prisma schema loaded from prisma\schema.prisma

✔ Generated Prisma Client (6.19.0) to .\src\generated\prisma in 98ms

PS C:\Users\juanm\OneDrive\Desktop\Nueva carpeta\TP_Comison_2_TUP\Trabajo Grupales\Grupo N° 11 - TP 2>





Loaded Prisma config from prisma.config.ts.

Prisma config detected, skipping environment variable loading.
Prisma schema loaded from prisma\schema.prisma

✔ Generated Prisma Client (6.19.0) to .\src\generated\prisma in 98ms

PS C:\Users\juanm\OneDrive\Desktop\Nueva carpeta\TP_Comison_2_TUP\Trabajo Grupales\Grupo N° 11 - TP 2>

Prisma schema loaded from prisma\schema.prisma

✔ Generated Prisma Client (6.19.0) to .\src\generated\prisma in 98ms

**Ejemplo de controlador andando**
este es el controlador
export const getserviciosID = async (req, res) => {
  try {
    const { id } = req.params;
    const servicio = await prisma.servicios.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!servicio) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }
    res.json(servicio);
  } catch (error) {
    console.error('Error al obtener servicio:', error);
    res.status(500).json({ message: 'Error al obtener servicio' });
  }
};


Peticion http://localhost:3000/api/servicios/1

Resultado:

{
  "id": 1,
  "nombre": "Corte de Cabello Hombre",
  "precio": "5000",
  "created_at": "2025-11-06T00:20:42.000Z",
  "updated_at": "2025-11-06T00:20:42.000Z"
}

# 🧾 Auditoría — Semana 3
### Grupo Nº: 9
### Tema asignado: (TP2 Heredado) -> Migración a Prisma + (TP3) Sistema de Gestión de Club Deportivo
### Integrantes (Nombre completo + Legajo):
- Varela, Nicolás (61278)
- Ruiz Locascio Tomas (61661)
- Coronel Ignacio (62295)

---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

Describir brevemente lo encontrado al abrir el proyecto:

- **Errores detectados ()**
    - El proyecto heredado usaba `mysql2` con consultas SQL directas (`pool.query`), lo cual es propenso a errores y difícil de mantener.
    - El `login.controller.js` original tenía una **falla crítica de seguridad**: comparaba la contraseña en texto plano en la consulta SQL (`WHERE email = ? AND contrasena = ?`).
    - Había controladores duplicados o confusos para la autenticación (`auth.controller.js`, `login.controller.js`).
    - Existía inconsistencia en el nombrado de archivos (ej: `config/DB.js` vs `config/db.js`), lo que causaba errores de importación.
    - El `schema.prisma` (y la base de datos) no estaba sincronizado con los requisitos:
        - Faltaban campos cruciales para la autenticación (`contrasena`, `rol`, `resetToken`).
        - Faltaban campos de negocio (ej: `apellido`, `fecha_nac` en `socios`).
        - Los nombres de los ID no eran consistentes (ej: `id` vs `idSocio`), lo que rompía las relaciones (`references`).
        - El borrado lógico (`activo`) no estaba implementado en todos los modelos (ej: `deportes`).
    - El `pagos.controller.js` tenía lógica incorrecta, intentaba asociar un pago a un `socio_id` en lugar de a una `membresia_id`.

---

## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados

- **Migración total a Prisma ORM:**
    - Se instaló y configuró Prisma, `prisma init`, `db pull`.
    - Se corrigió el `schema.prisma` para usar los ID correctos (`idSocio`, `idDeporte`, `idMembresia`, `idPago`) y se arreglaron todas las `@relation` (referencias).
    - Se estandarizó la conexión a la base de datos reemplazando `config/DB.js` para que exporte el `PrismaClient`.

- **Refactorización de Controladores:**
    - **Todos** los controladores (`socios`, `deportes`, `membresias`, `pagos`) fueron refactorizados para usar la sintaxis de Prisma (`findMany`, `findFirst`, `create`, `update`, `delete`).
    - Se implementó **Borrado Lógico** (`activo: false`) en todos los controladores, incluyendo `deportes` donde antes faltaba.
    - Se corrigió la lógica de `pagos.controller.js` para que se relacione correctamente con `membresias`.
    - Se unificó `auth.controller.js` y `login.controller.js` en un solo `auth.controller.js` coherente.
    - Se corrigió la falla de seguridad del login implementando `bcrypt` (a través de `hash.utils.js`) con `comparePassword`.

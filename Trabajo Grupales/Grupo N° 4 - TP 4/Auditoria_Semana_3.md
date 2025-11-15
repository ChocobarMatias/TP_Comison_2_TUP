# 🧾 Auditoría — Semana 3  
### Grupo Nº: 4 
### Tema asignado: Control de pago y cuotas de clientes
### Integrantes (Nombre completo + Legajo):
- Albornoz Franco - 61519
- Cortez German -  61514
- Giusiano Antonella - 61762

---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

Describir brevemente lo encontrado al abrir el proyecto:

- Errores detectados (bugs, warnings, import fallidos, rutas rotas, etc.)
- Faltantes respecto a Semana 1 (carpetas vacías, componentes incompletos, etc.)
- Problemas de estructura, naming, uso de git o dependencias

El proyecto heredado mezcla dos sistemas totalmente distintos de acceso a la base de datos:

A) Sequelize

Usado SOLO en el módulo de autenticación (User model + auth.controller)

Modelo: /models/user.model.js

Conexión: /config/db.js

Arranque del server: sequelize.sync()

B) mysql2 (SQL manual)

Usado en los módulos:

clientes

servicios

pagos/cobros

Sin embargo:

El archivo db.js NO devuelve un pool mysql2, sino una instancia de Sequelize.
Por lo tanto, rutas como:

pool.query()
pool.getConnection()

simplemente no pueden funcionar, porque pool no es un pool.

Conclusión: El proyecto heredado NO tiene una forma funcional de acceder a la base de datos

El archivo /routes/index.js solo monta:
/auth
/health

Las rutas principales del TP4 NO están montadas:
/clientes
/servicios
/pagos

Aunque existan sus archivos (clienteRoutes.js, servicioRoutes.js, pagoRoutes.js), ninguna está conectada al servidor, por lo que jamás podrían ejecutarse.

Falta total de base de datos

El proyecto heredado NO incluye:
ningún archivo .sql
ninguna tabla documentada
ninguna migración
ninguna instrucción sobre la base de datos esperada
ningún diagrama ni modelo entidad-relación

Pero los controllers referencian tablas como:

clientes
servicios
planes_pago
cuotas
users

Falta de controles de seguridad
No hay validación de datos en inputs.

email.service.js Tiene errores graves:

string mal interpolado
HTML inválido
template literal sin backticks
variables de entorno inexistentes



## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados
- …

### ✅ Nuevos requerimientos de Semana 2 agregados
- …

---

## Observaciones finales (opcional)
- Comentarios sobre el flujo de trabajo, dificultades o acuerdos del equipo.

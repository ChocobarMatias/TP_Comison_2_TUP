# 🧾 Auditoría — Semana 3  
### Grupo Nº: 8
### Tema asignado: Registro de Actividades Culturales en una Municipalidad
### Integrantes (Nombre completo + Legajo):
- Lucas Agustin Yudi
- Nicolas Iñigo
- Juarez Camila

---

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

Describir brevemente lo encontrado al abrir el proyecto:

- Errores detectados (bugs, warnings, import fallidos, rutas rotas, etc.)
* Imports mal hechos en auth.controller.
* No funciona reset password, recibe el token del body, pero en solicitar reset lo manda por parametros.
* Crea hash.utils con hash pass pero no lo usa en reset password.

- Faltantes respecto a Semana 1 (carpetas vacías, componentes incompletos, etc.)
* Define la variable dotenv en index pero no la usa.
* validators/auth.validator.js vacio, no valida nada.
* Falta el middleware para validar las validaciones de express-validator.
* No hay archivo de db, osea las tablas sql.
* No hay archivo de .env.example.
* Creo la validacion del token pero no la usa.
* Falta la modulacion del router.

- Problemas de estructura, naming, uso de git o dependencias
* No tiene la estructura con la carpeta src, ni sql.
* Falta app.js para guardar las rutas y levantar la db.
* Levanta la db en config/bd y no en app.
* En routes/auth.roues.j no define router como express.Router().
* En artistas.routes.js trae el archivo de artistas controller y no las funciones que exporta.


> Este apartado debe completarse **ANTES** de modificar el código.

---

## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados
- …

### ✅ Nuevos requerimientos de Semana 2 agregados
- …

---

## Observaciones finales (opcional)
- Comentarios sobre el flujo de trabajo, dificultades o acuerdos del equipo.

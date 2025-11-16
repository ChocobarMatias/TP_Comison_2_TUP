# 🧾 Auditoría — Semana 4
### Grupo Nº: 2  
### Tema asignado: Biblioteca 
### Integrantes (Nombre completo + Legajo):
- Bazan Matias Tomas 61152
- Cardozo Martin Daniel 61658
- Gimenez Ruesga Marcos David 61698
- Herrera Karen Luciana 61151
- Navarro Lautaro Cesar 61649

## 1) RELEVAMIENTO — Antes de comenzar a trabajar

Describir brevemente lo encontrado al abrir el proyecto:

- Errores detectados (bugs, warnings, import fallidos, rutas rotas, etc.)
No funciona login validator (no se muestran correctamente los mensajes al faltar campos)
No funciona register validator 
Error en el puerto del controlador auth para enviar mail

- Faltantes respecto a Semana 1 (carpetas vacías, componentes incompletos, etc.)
completo ok

- Problemas de estructura, naming, uso de git o dependencias
Rutas mal diferenciadas 

> Este apartado debe completarse **ANTES** de modificar el código.

---

## 2) SOLUCIONES IMPLEMENTADAS + NUEVO AGREGADO

### ✅ Soluciones aplicadas a problemas detectados
- Se corrige hash.utils.js (error de tipeo en bycript) que producia un error 500 y satlRounds por saltRounds
- Se corrije puerto en backennd para poder personalizar el recupero de contraseña al enviar mail
- Se modifican rutas :
    En libros:ruta para modificar (/editar) y ruta para eliminar un libro (/eliminar) 
    En Alumnos:ruta para modificar (/editar) y ruta para eliminar un alumno (/eliminar) 
    En Prestamos:ruta para modificar (/editar) y ruta para eliminar un prestamo (/eliminar) 

### ✅ Nuevos requerimientos de Semana 2 agregados
-

---

## Observaciones finales (opcional)
- Se agrega estructura de frontend sin utilizar prisma, sin agregar tablas adicionales a la base de datos.

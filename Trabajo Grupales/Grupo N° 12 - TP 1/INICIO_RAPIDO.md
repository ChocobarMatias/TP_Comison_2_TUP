# ⚡ INICIO RÁPIDO - Grupo 12

## 🎯 Pasos para Ejecutar el Proyecto (Primera vez)

### 📋 Pre-requisitos
- ✅ Node.js v20+ instalado
- ✅ MySQL instalado y corriendo
- ✅ Base de datos creada (con tablas)
- ✅ Git instalado

---

## 🚀 PASO 1: Configurar Backend

### 1.1 Instalar dependencias
```powershell
npm install
```

### 1.2 Crear y configurar .env
```powershell
# Copiar el archivo de ejemplo
copy .env.example .env

# Editar .env y configurar tu conexión a MySQL
# Formato: mysql://USER:PASSWORD@HOST:PORT/DATABASE
# Ejemplo: mysql://root:mipassword@localhost:3306/mi_base_datos
```

**Archivo .env debe quedar así:**
```env
PORT=3000
DATABASE_URL="mysql://root:tu_password@localhost:3306/tu_database"
```

### 1.3 Ejecutar comandos de Prisma
```powershell
# Importar estructura de la base de datos
npm run prisma:pull

# Generar cliente Prisma
npm run prisma:generate
```

✅ **Verificación:** Deberías ver mensajes de éxito en consola.

### 1.4 Iniciar el servidor backend
```powershell
npm run dev
```

✅ **Verificación:** 
- Consola muestra: `Servidor escuchando en el puerto 3000`
- Abrir navegador en: http://localhost:3000
- Debería responder (aunque sea con error 404 si no hay ruta raíz)

---

## 🎨 PASO 2: Configurar Frontend

### 2.1 Ir a la carpeta frontend
```powershell
cd frontend
```

### 2.2 Instalar dependencias
```powershell
npm install
```

### 2.3 Verificar archivo .env del frontend
El archivo ya está creado en `frontend/.env`:
```env
VITE_API_URL=http://localhost:3000/api
```

### 2.4 Iniciar el servidor frontend
```powershell
npm run dev
```

✅ **Verificación:**
- Consola muestra: `Local: http://localhost:5173/`
- Abrir navegador en: http://localhost:5173
- Debería cargar la aplicación React

---

## 🎯 PASO 3: Verificar que todo funciona

### Backend ✅
- [ ] Servidor corriendo en puerto 3000
- [ ] Sin errores en consola
- [ ] Prisma conectado a la base de datos

### Frontend ✅
- [ ] Aplicación corriendo en puerto 5173
- [ ] Sin errores en consola
- [ ] Página carga correctamente

### Prueba de integración ✅
```powershell
# En otra terminal, probar el endpoint
curl http://localhost:3000/api/productos
```

Si todo está bien, deberías recibir un JSON con productos (o array vacío).

---

## 📝 Comandos Resumidos

### Backend (raíz del proyecto)
```powershell
# Instalación inicial
npm install
copy .env.example .env
npm run prisma:pull
npm run prisma:generate

# Desarrollo
npm run dev              # Iniciar servidor

# Utilidades
npm run prisma:studio    # Ver datos en GUI
```

### Frontend (carpeta frontend/)
```powershell
# Instalación inicial
cd frontend
npm install

# Desarrollo
npm run dev              # Iniciar servidor

# Producción
npm run build            # Crear build
npm run preview          # Preview del build
```

---

## 🔧 Solución de Problemas Comunes

### ❌ Error: Cannot find module '@prisma/client'
**Solución:**
```powershell
npm run prisma:generate
```

### ❌ Error: P1001 (Can't reach database server)
**Solución:**
1. Verificar que MySQL está corriendo
2. Verificar DATABASE_URL en .env
3. Verificar usuario y password correctos

### ❌ Error: Table 'database.table' doesn't exist
**Solución:**
1. Verificar que la base de datos tiene tablas
2. Ejecutar `npm run prisma:pull` de nuevo

### ❌ Frontend: CORS error
**Solución:**
1. Verificar que backend está corriendo
2. Verificar VITE_API_URL en frontend/.env

### ❌ Puerto 3000 o 5173 ocupado
**Solución:**
```powershell
# Windows - Encontrar y matar proceso
netstat -ano | findstr :3000
taskkill /PID [número_del_proceso] /F

# O cambiar el puerto en .env (backend) o vite.config.js (frontend)
```

---

## 🎯 Flujo de Trabajo Diario

### Iniciar trabajo
```powershell
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Durante desarrollo
- Backend: Los cambios se recargan automáticamente (watch mode)
- Frontend: Hot Module Replacement (HMR) automático

### Terminar trabajo
- `Ctrl + C` en ambas terminales para detener servidores

---

## 📚 Siguientes Pasos

### Backend
1. [ ] Migrar todos los controladores a Prisma
2. [ ] Actualizar rutas para usar controladores Prisma
3. [ ] Probar todos los endpoints con Postman/Thunder Client
4. [ ] Agregar validaciones de datos

### Frontend
1. [ ] Completar páginas faltantes
2. [ ] Conectar servicios con backend
3. [ ] Implementar formularios completos
4. [ ] Agregar manejo de errores

### Documentación
1. [ ] Completar integrantes en Auditoria_Semana_3.md
2. [ ] Tomar capturas de los comandos ejecutados
3. [ ] Documentar problemas encontrados

---

## 🆘 Ayuda Adicional

### Documentación del proyecto
- `README_COMPLETO.md` - Documentación completa
- `GUIA_RAPIDA.md` - Comandos rápidos
- `ESTRUCTURA_VISUAL.md` - Estructura del proyecto
- `Auditoria_Semana_3.md` - Auditoría del TP

### Documentación oficial
- [Prisma ORM](https://www.prisma.io/docs)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)

---

## ✅ Checklist Final

- [ ] Backend instalado y corriendo
- [ ] Frontend instalado y corriendo
- [ ] Prisma configurado correctamente
- [ ] Base de datos conectada
- [ ] Endpoints funcionando
- [ ] Frontend carga correctamente
- [ ] Sin errores en consola (backend y frontend)

**Si todos los checks están ✅, estás listo para desarrollar! 🎉**

---

**Última actualización:** Noviembre 2025  
**Versión:** 1.0

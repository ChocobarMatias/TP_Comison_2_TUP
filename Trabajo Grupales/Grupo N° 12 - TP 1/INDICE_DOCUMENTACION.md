# 📚 ÍNDICE DE DOCUMENTACIÓN - Grupo 12

## 🎯 Empieza aquí

### 🚀 Para comenzar rápido
👉 **[INICIO_RAPIDO.md](./INICIO_RAPIDO.md)**
- Pasos exactos para ejecutar el proyecto
- Comandos resumidos
- Solución de problemas comunes
- Checklist de verificación

---

## 📖 Documentación Principal

### 📄 Documentación Completa
👉 **[README_COMPLETO.md](./README_COMPLETO.md)**
- Descripción del proyecto
- Tecnologías utilizadas
- Estructura completa
- Instalación detallada
- Uso de Prisma ORM
- Arquitectura del frontend
- Referencias y recursos

### 📊 Estructura Visual
👉 **[ESTRUCTURA_VISUAL.md](./ESTRUCTURA_VISUAL.md)**
- Árbol de carpetas completo
- Flujo de datos backend/frontend
- Diagramas de arquitectura
- Puntos clave
- Convenciones de nombrado

### ⚡ Guía Rápida
👉 **[GUIA_RAPIDA.md](./GUIA_RAPIDA.md)**
- Comandos de instalación
- Comandos de Prisma
- Comandos de desarrollo
- Tips útiles
- Errores comunes

---

## 📋 Documentación del TP

### 🧾 Auditoría Oficial
👉 **[Auditoria_Semana_3.md](./Auditoria_Semana_3.md)**
- Relevamiento inicial
- Soluciones implementadas
- Migración a Prisma paso a paso
- Estructura del frontend
- Comparación antes/después
- Scripts disponibles
- Resultado final

---

## 🔧 Archivos Técnicos

### Backend

#### Prisma
- **`prisma/schema.prisma`** - Modelos de la base de datos
- **`prisma/schema.prisma.example`** - Ejemplo de cómo se ve el schema
- **`prisma/prisma.config.js`** - Configuración para dotenv
- **`src/config/prisma.js`** - Cliente Prisma centralizado

#### Controladores
- **`src/controllers/PLANTILLA_CONTROLLER.js`** - Plantilla CRUD completa
- **`src/controllers/productos.controller.prisma.js`** - Ejemplo con Prisma
- **`src/controllers/*.controller.js`** - Controladores existentes

### Frontend

#### Configuración
- **`frontend/vite.config.js`** - Configuración de Vite
- **`frontend/package.json`** - Dependencias
- **`frontend/.env`** - Variables de entorno

#### Código Principal
- **`frontend/src/App.jsx`** - Componente raíz
- **`frontend/src/main.jsx`** - Punto de entrada
- **`frontend/src/router/AppRouter.jsx`** - Configuración de rutas

#### Servicios
- **`frontend/src/services/api.js`** - ⭐ Configuración de Axios
- **`frontend/src/services/*Service.js`** - Servicios por recurso

#### Estado Global
- **`frontend/src/store/useAuthStore.js`** - Store de autenticación
- **`frontend/src/store/useThemeStore.js`** - Store de temas

#### Custom Hooks
- **`frontend/src/hooks/useFetch.js`** - Peticiones HTTP
- **`frontend/src/hooks/useModal.js`** - Manejo de modales
- **`frontend/src/hooks/usePagination.js`** - Paginación

---

## 📚 Recursos por Tarea

### 🎯 "Quiero empezar el proyecto"
1. Lee: [INICIO_RAPIDO.md](./INICIO_RAPIDO.md)
2. Sigue los pasos paso a paso
3. Verifica el checklist final

### 🔍 "Quiero entender la estructura"
1. Lee: [ESTRUCTURA_VISUAL.md](./ESTRUCTURA_VISUAL.md)
2. Revisa los diagramas de flujo
3. Consulta las convenciones de nombrado

### 🛠️ "Quiero desarrollar una funcionalidad"
1. Backend: Copia [PLANTILLA_CONTROLLER.js](./src/controllers/PLANTILLA_CONTROLLER.js)
2. Frontend: Revisa ejemplos en `frontend/src/pages/`
3. Consulta: [GUIA_RAPIDA.md](./GUIA_RAPIDA.md)

### 📝 "Quiero completar la auditoría"
1. Abre: [Auditoria_Semana_3.md](./Auditoria_Semana_3.md)
2. Completa sección de integrantes
3. Toma capturas de comandos ejecutados
4. Documenta problemas encontrados

### 🐛 "Tengo un error"
1. Consulta sección "Solución de Problemas" en [INICIO_RAPIDO.md](./INICIO_RAPIDO.md)
2. Revisa "Errores Comunes" en [GUIA_RAPIDA.md](./GUIA_RAPIDA.md)
3. Verifica logs de consola

### 🔷 "Quiero aprender Prisma"
1. Lee sección "Uso de Prisma ORM" en [README_COMPLETO.md](./README_COMPLETO.md)
2. Revisa ejemplos en [PLANTILLA_CONTROLLER.js](./src/controllers/PLANTILLA_CONTROLLER.js)
3. Consulta [Documentación oficial de Prisma](https://www.prisma.io/docs)

### 🎨 "Quiero aprender la arquitectura frontend"
1. Lee "Documentación del Frontend" en [README_COMPLETO.md](./README_COMPLETO.md)
2. Revisa estructura en [ESTRUCTURA_VISUAL.md](./ESTRUCTURA_VISUAL.md)
3. Analiza código en `frontend/src/`

---

## 📖 Orden de Lectura Recomendado

### Para Principiantes
1. ⭐ **INICIO_RAPIDO.md** - Ejecutar el proyecto
2. 📊 **ESTRUCTURA_VISUAL.md** - Entender la organización
3. ⚡ **GUIA_RAPIDA.md** - Comandos útiles
4. 📄 **README_COMPLETO.md** - Profundizar conocimientos

### Para Desarrolladores
1. 📊 **ESTRUCTURA_VISUAL.md** - Ver arquitectura
2. 📄 **README_COMPLETO.md** - Leer documentación técnica
3. 🔧 **PLANTILLA_CONTROLLER.js** - Copiar y adaptar
4. ⚡ **GUIA_RAPIDA.md** - Referencia rápida

### Para la Auditoría
1. 🧾 **Auditoria_Semana_3.md** - Documento oficial
2. ⭐ **INICIO_RAPIDO.md** - Tomar capturas
3. 📄 **README_COMPLETO.md** - Referencias técnicas

---

## 🗂️ Estructura de Archivos de Documentación

```
📦 Grupo N° 12 - TP 1/
│
├── 📄 INDICE_DOCUMENTACION.md     # ⭐ Este archivo
├── 📄 INICIO_RAPIDO.md            # 🚀 Inicio rápido
├── 📄 README_COMPLETO.md          # 📖 Doc completa
├── 📄 ESTRUCTURA_VISUAL.md        # 📊 Estructura
├── 📄 GUIA_RAPIDA.md              # ⚡ Comandos
├── 📄 Auditoria_Semana_3.md       # 🧾 Auditoría oficial
│
├── 📁 prisma/
│   └── 📄 schema.prisma.example   # Ejemplo de schema
│
├── 📁 src/
│   └── 📁 controllers/
│       └── 📄 PLANTILLA_CONTROLLER.js  # Plantilla CRUD
│
└── 📁 frontend/
    └── ... (código del frontend)
```

---

## 🔍 Búsqueda Rápida

### Comandos
- **Prisma:** [GUIA_RAPIDA.md > Comandos de Prisma](./GUIA_RAPIDA.md#comandos-de-prisma)
- **Desarrollo:** [GUIA_RAPIDA.md > Desarrollo](./GUIA_RAPIDA.md#desarrollo)
- **Instalación:** [INICIO_RAPIDO.md > Pasos](./INICIO_RAPIDO.md#pasos)

### Código
- **Backend:** [PLANTILLA_CONTROLLER.js](./src/controllers/PLANTILLA_CONTROLLER.js)
- **Frontend:** [frontend/src/](./frontend/src/)
- **Configuración Prisma:** [src/config/prisma.js](./src/config/prisma.js)
- **Configuración Axios:** [frontend/src/services/api.js](./frontend/src/services/api.js)

### Conceptos
- **Prisma ORM:** [README_COMPLETO.md > Uso de Prisma](./README_COMPLETO.md#uso-de-prisma-orm)
- **Arquitectura Frontend:** [README_COMPLETO.md > Frontend](./README_COMPLETO.md#documentación-del-frontend)
- **Flujo de datos:** [ESTRUCTURA_VISUAL.md > Flujo](./ESTRUCTURA_VISUAL.md#flujo-de-datos)

---

## 💡 Tips de Navegación

### En VS Code
- `Ctrl + P` - Buscar archivo por nombre
- `Ctrl + Shift + F` - Buscar en todos los archivos
- `Ctrl + Click` en un link - Abrir archivo

### En GitHub
- Usa la tabla de contenidos de cada archivo
- Los links funcionan entre archivos
- Puedes navegar con el explorador de archivos

---

## 🆘 Ayuda

### Documentación Oficial
- [Prisma](https://www.prisma.io/docs)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)

### Contacto
- Profesor: Matías Chocobar
- Grupo: 12
- Asignatura: Programación 4 - Comisión 2

---

## ✅ Resumen Ejecutivo

| Documento | Cuándo usarlo | Tiempo de lectura |
|-----------|---------------|-------------------|
| **INICIO_RAPIDO.md** | Primera vez, ejecutar proyecto | 5-10 min |
| **ESTRUCTURA_VISUAL.md** | Entender organización | 10 min |
| **GUIA_RAPIDA.md** | Referencia de comandos | 5 min |
| **README_COMPLETO.md** | Documentación técnica completa | 20-30 min |
| **Auditoria_Semana_3.md** | Entregar TP | 15 min |
| **PLANTILLA_CONTROLLER.js** | Crear controladores | Usar como base |

---

**¡Éxito con el proyecto! 🚀**

**Última actualización:** Noviembre 2025  
**Grupo:** 12  
**Semana:** 3

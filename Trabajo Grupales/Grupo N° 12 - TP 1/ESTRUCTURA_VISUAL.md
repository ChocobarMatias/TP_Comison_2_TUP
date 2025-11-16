# 📊 Estructura Visual del Proyecto - Grupo 12

```
📦 Grupo N° 12 - TP 1/
│
├── 📁 prisma/                              # 🔷 PRISMA ORM
│   ├── 📄 schema.prisma                    # ⭐ Modelos de la BD (se genera con db pull)
│   ├── 📄 schema.prisma.example            # Ejemplo de cómo se ve el schema
│   └── 📄 prisma.config.js                 # Config para dotenv
│
├── 📁 src/                                 # 🔷 BACKEND
│   ├── 📁 config/
│   │   ├── 📄 db.js                        # [LEGACY] MySQL2 (NO USAR)
│   │   └── 📄 prisma.js                    # ⭐ Cliente Prisma (USAR ESTE)
│   │
│   ├── 📁 controllers/
│   │   ├── 📄 PLANTILLA_CONTROLLER.js      # 📋 Plantilla para copiar
│   │   ├── 📄 productos.controller.js      # ❌ Versión MySQL2
│   │   ├── 📄 productos.controller.prisma.js # ✅ Versión Prisma
│   │   ├── 📄 donadores.controller.js
│   │   ├── 📄 comedores.controller.js
│   │   └── 📄 entregas.controller.js
│   │
│   ├── 📁 routes/
│   │   ├── 📄 productos.route.js
│   │   ├── 📄 donadores.route.js
│   │   ├── 📄 comedores.route.js
│   │   └── 📄 entregas.route.js
│   │
│   ├── 📁 services/
│   └── 📁 utils/
│
├── 📁 frontend/                            # 🔷 FRONTEND (React + Vite)
│   ├── 📁 src/
│   │   │
│   │   ├── 📁 components/                  # 🎨 Componentes UI
│   │   │   ├── 📄 Button.jsx               # Botón reutilizable
│   │   │   ├── 📄 Modal.jsx                # Modal reutilizable
│   │   │   ├── 📄 InputField.jsx           # Campo de entrada
│   │   │   └── 📄 Table.jsx                # Tabla de datos
│   │   │
│   │   ├── 📁 hooks/                       # 🪝 Custom Hooks
│   │   │   ├── 📄 useFetch.js              # Hook para peticiones HTTP
│   │   │   ├── 📄 useModal.js              # Hook para modales
│   │   │   └── 📄 usePagination.js         # Hook para paginación
│   │   │
│   │   ├── 📁 pages/                       # 📄 Páginas/Vistas
│   │   │   ├── 📄 HomePage.jsx             # Página de inicio
│   │   │   ├── 📄 LoginPage.jsx            # Página de login
│   │   │   ├── 📄 DashboardPage.jsx        # Dashboard principal
│   │   │   ├── 📄 ProductosPage.jsx        # Gestión de productos
│   │   │   └── 📄 NotFoundPage.jsx         # Página 404
│   │   │
│   │   ├── 📁 services/                    # 🌐 Capa de API
│   │   │   ├── 📄 api.js                   # ⭐ Config Axios (BASE)
│   │   │   ├── 📄 productosService.js      # Servicio de productos
│   │   │   └── 📄 authService.js           # Servicio de autenticación
│   │   │
│   │   ├── 📁 store/                       # 🗄️ Estado Global (Zustand)
│   │   │   ├── 📄 useAuthStore.js          # Store de autenticación
│   │   │   └── 📄 useThemeStore.js         # Store de temas
│   │   │
│   │   ├── 📁 proteccionRutas/             # 🔒 Rutas Protegidas
│   │   │   ├── 📄 ProtectedRoute.jsx       # Ruta para usuarios autenticados
│   │   │   └── 📄 AdminRoute.jsx           # Ruta solo para admins
│   │   │
│   │   ├── 📁 router/                      # 🛣️ Configuración de Rutas
│   │   │   └── 📄 AppRouter.jsx            # Router principal
│   │   │
│   │   ├── 📁 endpoint/                    # 🔗 URLs del Backend
│   │   │   └── 📄 endpoints.js             # URLs centralizadas
│   │   │
│   │   ├── 📁 utils/                       # 🛠️ Utilidades
│   │   │   ├── 📄 formatDate.js            # Formateo de fechas
│   │   │   ├── 📄 validateEmail.js         # Validación de email
│   │   │   ├── 📄 calculateTotal.js        # Cálculos
│   │   │   └── 📄 capitalize.js            # Capitalización de texto
│   │   │
│   │   ├── 📁 styles/                      # 🎨 Estilos
│   │   │   └── 📄 index.css                # CSS global
│   │   │
│   │   ├── 📄 App.jsx                      # Componente raíz
│   │   └── 📄 main.jsx                     # Punto de entrada
│   │
│   ├── 📄 index.html                       # HTML base
│   ├── 📄 vite.config.js                   # Config de Vite
│   ├── 📄 package.json                     # Dependencias frontend
│   ├── 📄 .env                             # Variables de entorno
│   └── 📄 .gitignore
│
├── 📄 .env.example                         # ⭐ Variables de entorno (plantilla)
├── 📄 .gitignore
├── 📄 package.json                         # ⭐ Dependencias backend
├── 📄 index.js                             # Punto de entrada del servidor
├── 📄 app.js                               # Configuración de Express
│
├── 📄 Auditoria_Semana_3.md                # 📋 Auditoría completa del TP
├── 📄 README_COMPLETO.md                   # 📖 Documentación completa
├── 📄 GUIA_RAPIDA.md                       # 🚀 Guía rápida de comandos
└── 📄 ESTRUCTURA_VISUAL.md                 # 📊 Este archivo
```

---

## 🔄 Flujo de Datos

### Backend (API REST)

```
┌─────────────┐
│   Cliente   │  (Frontend, Postman, etc.)
└──────┬──────┘
       │ HTTP Request (GET, POST, PUT, DELETE)
       ↓
┌─────────────────────────────────────────┐
│         Express Server (app.js)         │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │   Middleware (CORS, JSON, etc.)   │ │
│  └───────────────┬───────────────────┘ │
│                  ↓                      │
│  ┌───────────────────────────────────┐ │
│  │       Router (routes/*.js)        │ │
│  └───────────────┬───────────────────┘ │
│                  ↓                      │
│  ┌───────────────────────────────────┐ │
│  │   Controller (controllers/*.js)   │ │
│  │   ┌─────────────────────────────┐ │ │
│  │   │ import prisma from config   │ │ │
│  │   │ prisma.modelo.findMany()    │ │ │
│  │   └─────────────┬───────────────┘ │ │
│  └─────────────────┼─────────────────┘ │
└────────────────────┼───────────────────┘
                     ↓
         ┌───────────────────────┐
         │   Prisma ORM Client   │
         │   (config/prisma.js)  │
         └───────────┬───────────┘
                     ↓
              ┌──────────────┐
              │  MySQL DB    │
              │  (localhost) │
              └──────────────┘
```

### Frontend (React)

```
┌─────────────────────────────────────────┐
│          Browser (localhost:5173)       │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │        App.jsx (BrowserRouter)    │ │
│  └───────────────┬───────────────────┘ │
│                  ↓                      │
│  ┌───────────────────────────────────┐ │
│  │      AppRouter (router/*.jsx)     │ │
│  └───────────────┬───────────────────┘ │
│                  ↓                      │
│  ┌───────────────────────────────────┐ │
│  │     Pages (pages/*.jsx)           │ │
│  │     - ProductosPage               │ │
│  │     - DashboardPage               │ │
│  │     - LoginPage                   │ │
│  └───────────────┬───────────────────┘ │
│                  ↓                      │
│  ┌───────────────────────────────────┐ │
│  │  Custom Hooks (hooks/*.js)        │ │
│  │  - useFetch('/api/productos')     │ │
│  └───────────────┬───────────────────┘ │
│                  ↓                      │
│  ┌───────────────────────────────────┐ │
│  │    Services (services/*.js)       │ │
│  │    - productosService.js          │ │
│  │    import api from './api.js'     │ │
│  └───────────────┬───────────────────┘ │
│                  ↓                      │
│  ┌───────────────────────────────────┐ │
│  │      Axios (services/api.js)      │ │
│  │      baseURL: localhost:3000/api  │ │
│  └───────────────┬───────────────────┘ │
└────────────────────┼───────────────────┘
                     ↓
         ┌───────────────────────┐
         │   Backend API REST    │
         │   (localhost:3000)    │
         └───────────────────────┘
```

---

## 🎯 Puntos Clave de la Arquitectura

### Backend
✅ **Un solo cliente Prisma** en `/src/config/prisma.js`  
✅ **Controladores usan Prisma** en lugar de SQL manual  
✅ **Una variable DATABASE_URL** en `.env`  
✅ **Manejo de errores** con códigos de Prisma (P2025, etc.)

### Frontend
✅ **Axios configurado una vez** en `/services/api.js`  
✅ **Custom hooks reutilizables** en `/hooks`  
✅ **Estado global con Zustand** en `/store`  
✅ **Rutas protegidas** en `/proteccionRutas`  
✅ **Componentes UI reutilizables** en `/components`

---

## 📝 Convenciones de Nombrado

### Backend
- **Controladores:** `nombre.controller.js` o `nombre.controller.prisma.js`
- **Rutas:** `nombre.route.js`
- **Servicios:** `nombreService.js`
- **Config:** `nombre.js`

### Frontend
- **Componentes:** `PascalCase.jsx` (Button.jsx, Modal.jsx)
- **Páginas:** `PascalCasePage.jsx` (HomePage.jsx, LoginPage.jsx)
- **Hooks:** `useCamelCase.js` (useFetch.js, useModal.js)
- **Servicios:** `camelCaseService.js` (authService.js)
- **Stores:** `useCamelCaseStore.js` (useAuthStore.js)

---

## 🔑 Archivos Clave

### Backend
| Archivo | Propósito |
|---------|-----------|
| `prisma/schema.prisma` | Modelos de la base de datos |
| `src/config/prisma.js` | Cliente Prisma centralizado |
| `src/controllers/*.prisma.js` | Controladores con Prisma |
| `.env` | Variables de entorno |

### Frontend
| Archivo | Propósito |
|---------|-----------|
| `src/services/api.js` | Configuración de Axios |
| `src/router/AppRouter.jsx` | Configuración de rutas |
| `src/store/*.js` | Estado global (Zustand) |
| `src/hooks/*.js` | Custom hooks reutilizables |

---

## 🚀 Orden de Ejecución

### Primera vez
1. ✅ Instalar dependencias backend: `npm install`
2. ✅ Configurar `.env` con DATABASE_URL
3. ✅ Ejecutar `npm run prisma:pull`
4. ✅ Ejecutar `npm run prisma:generate`
5. ✅ Iniciar backend: `npm run dev`
6. ✅ Instalar frontend: `cd frontend && npm install`
7. ✅ Iniciar frontend: `npm run dev`

### Desarrollo diario
1. ✅ Iniciar backend: `npm run dev`
2. ✅ Iniciar frontend: `cd frontend && npm run dev`
3. ✅ Desarrollar y probar

---

**Documentación completa:** `README_COMPLETO.md`  
**Guía rápida:** `GUIA_RAPIDA.md`  
**Auditoría:** `Auditoria_Semana_3.md`

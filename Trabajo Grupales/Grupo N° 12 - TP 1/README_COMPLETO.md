# 🚀 Grupo 12 - TP Semana 3 | Backend + Frontend

**Asignatura:** Programación 4 - Comisión 2  
**Profesor:** Matías Chocobar  
**Tema:** Migración a Prisma ORM + Frontend con React + Vite

---

## 📋 Tabla de Contenidos

1. [Descripción del Proyecto](#-descripción-del-proyecto)
2. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
3. [Estructura del Proyecto](#-estructura-del-proyecto)
4. [Instalación y Configuración](#-instalación-y-configuración)
5. [Scripts Disponibles](#-scripts-disponibles)
6. [Uso de Prisma ORM](#-uso-de-prisma-orm)
7. [Documentación del Frontend](#-documentación-del-frontend)
8. [Integrantes](#-integrantes)

---

## 📝 Descripción del Proyecto

Este proyecto es un sistema de gestión completo con:

- **Backend:** Node.js + Express + Prisma ORM + MySQL
- **Frontend:** React + Vite + React Router + Zustand

### Características principales:

✅ **Backend con Prisma ORM**
- Consultas tipo-seguras
- Migraciones automáticas
- Cliente generado automáticamente
- Logging integrado

✅ **Frontend Moderno**
- Arquitectura escalable
- Custom hooks reutilizables
- Estado global con Zustand
- Rutas protegidas
- Componentes UI reutilizables

---

## 🛠 Tecnologías Utilizadas

### Backend
- **Node.js** v20+
- **Express** v5.1.0
- **Prisma ORM** v6.1.0
- **MySQL** (Base de datos)
- **dotenv** (Variables de entorno)
- **CORS** (Manejo de CORS)

### Frontend
- **React** v18.3
- **Vite** v6.0 (Build tool)
- **React Router** v6.28 (Navegación)
- **Zustand** v5.0 (Estado global)
- **Axios** v1.7 (Peticiones HTTP)

---

## 📁 Estructura del Proyecto

```
Grupo N° 12 - TP 1/
│
├── prisma/                      # 🔷 Prisma ORM
│   ├── schema.prisma            # Modelos de la base de datos
│   └── prisma.config.js         # Config para dotenv
│
├── src/                         # 🔷 Backend (Node + Express)
│   ├── config/
│   │   ├── db.js                # [LEGACY] Conexión MySQL2
│   │   └── prisma.js            # ⭐ Cliente Prisma centralizado
│   │
│   ├── controllers/             # Lógica de negocio
│   │   ├── productos.controller.js           # MySQL2
│   │   ├── productos.controller.prisma.js    # ⭐ Prisma
│   │   ├── donadores.controller.js
│   │   ├── comedores.controller.js
│   │   └── entregas.controller.js
│   │
│   ├── routes/                  # Rutas de la API
│   │   ├── productos.route.js
│   │   ├── donadores.route.js
│   │   ├── comedores.route.js
│   │   └── entregas.route.js
│   │
│   ├── services/                # Lógica de servicios (opcional)
│   └── utils/                   # Utilidades
│
├── frontend/                    # 🔷 Frontend (React + Vite)
│   ├── src/
│   │   ├── components/          # Componentes reutilizables
│   │   ├── hooks/               # Custom hooks
│   │   ├── pages/               # Páginas/vistas
│   │   ├── services/            # ⭐ Axios + servicios API
│   │   ├── store/               # Estado global (Zustand)
│   │   ├── router/              # Configuración de rutas
│   │   ├── proteccionRutas/     # Rutas protegidas
│   │   ├── endpoint/            # URLs centralizadas
│   │   ├── utils/               # Funciones auxiliares
│   │   ├── styles/              # Estilos CSS
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .env.example                 # Variables de entorno (plantilla)
├── .gitignore
├── package.json
├── index.js                     # Punto de entrada del servidor
├── app.js                       # Configuración de Express
├── Auditoria_Semana_3.md        # 📄 Documentación de auditoría
└── README.md                    # 📄 Este archivo
```

---

## ⚙️ Instalación y Configuración

### 1️⃣ Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd "Grupo N° 12 - TP 1"
```

### 2️⃣ Configurar el Backend

#### Instalar dependencias
```bash
npm install
```

#### Configurar variables de entorno

Copiar el archivo `.env.example` y renombrarlo a `.env`:

```bash
copy .env.example .env    # Windows
cp .env.example .env      # Linux/Mac
```

Editar `.env` con tus datos reales:

```env
PORT=3000

# Formato: mysql://USER:PASSWORD@HOST:PORT/DATABASE
DATABASE_URL="mysql://root:tu_password@localhost:3306/tu_database"
```

#### Importar estructura de la base de datos con Prisma

```bash
npm run prisma:pull
```

Este comando lee tu base de datos MySQL existente y genera automáticamente los modelos en `prisma/schema.prisma`.

#### Generar el cliente Prisma

```bash
npm run prisma:generate
```

Esto crea el cliente Prisma en `node_modules/@prisma/client`.

### 3️⃣ Configurar el Frontend

```bash
cd frontend
npm install
```

Editar `frontend/.env` si es necesario:

```env
VITE_API_URL=http://localhost:3000/api
```

---

## 🚀 Iniciar la Aplicación

### Backend (Puerto 3000)

```bash
# Modo desarrollo (con auto-reload)
npm run dev

# Modo producción
npm start
```

El servidor estará disponible en: `http://localhost:3000`

### Frontend (Puerto 5173)

```bash
cd frontend
npm run dev
```

El frontend estará disponible en: `http://localhost:5173`

---

## 📜 Scripts Disponibles

### Backend

| Script | Comando | Descripción |
|--------|---------|-------------|
| Desarrollo | `npm run dev` | Inicia el servidor con auto-reload |
| Producción | `npm start` | Inicia el servidor en modo producción |
| Prisma Pull | `npm run prisma:pull` | Importa estructura de la base de datos |
| Prisma Generate | `npm run prisma:generate` | Genera el cliente Prisma |
| Prisma Studio | `npm run prisma:studio` | Abre interfaz gráfica de la BD |

### Frontend

| Script | Comando | Descripción |
|--------|---------|-------------|
| Desarrollo | `npm run dev` | Servidor de desarrollo con HMR |
| Build | `npm run build` | Crea build de producción |
| Preview | `npm run preview` | Preview del build de producción |

---

## 🔷 Uso de Prisma ORM

### Comandos principales

```bash
# Importar estructura de DB existente
npx prisma db pull

# Generar cliente Prisma
npx prisma generate

# Aplicar cambios del schema a la DB
npx prisma db push

# Crear migración
npx prisma migrate dev --name nombre_migracion

# Abrir Prisma Studio (GUI para ver datos)
npx prisma studio

# Formatear schema.prisma
npx prisma format
```

### Ejemplos de uso en controladores

#### ✅ Obtener todos los registros
```javascript
import prisma from '../config/prisma.js';

export const getProductos = async (req, res) => {
  const productos = await prisma.productos.findMany();
  res.json(productos);
};
```

#### ✅ Obtener un registro por ID
```javascript
export const getProductoId = async (req, res) => {
  const { id } = req.params;
  const producto = await prisma.productos.findUnique({
    where: { id_producto: parseInt(id) }
  });
  res.json(producto);
};
```

#### ✅ Crear un nuevo registro
```javascript
export const createProducto = async (req, res) => {
  const { nombre, descripcion, categoria, cantidad } = req.body;
  
  const nuevoProducto = await prisma.productos.create({
    data: { nombre, descripcion, categoria, cantidad }
  });
  
  res.status(201).json(nuevoProducto);
};
```

#### ✅ Actualizar un registro
```javascript
export const updateProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, categoria, cantidad } = req.body;
  
  const productoActualizado = await prisma.productos.update({
    where: { id_producto: parseInt(id) },
    data: { nombre, descripcion, categoria, cantidad }
  });
  
  res.json(productoActualizado);
};
```

#### ✅ Eliminar un registro
```javascript
export const deleteProducto = async (req, res) => {
  const { id } = req.params;
  
  await prisma.productos.delete({
    where: { id_producto: parseInt(id) }
  });
  
  res.json({ message: 'Producto eliminado' });
};
```

---

## 🎨 Documentación del Frontend

### Arquitectura de carpetas explicada

```
src/
├── components/         # Componentes UI reutilizables
│   ├── Button.jsx      # Botón personalizable
│   ├── Modal.jsx       # Modal reutilizable
│   ├── InputField.jsx  # Campo de entrada
│   └── Table.jsx       # Tabla de datos
│
├── hooks/              # Custom hooks
│   ├── useFetch.js     # Peticiones HTTP con estado
│   ├── useModal.js     # Manejo de modales
│   └── usePagination.js # Paginación de listas
│
├── pages/              # Páginas/vistas principales
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── DashboardPage.jsx
│   ├── ProductosPage.jsx
│   └── NotFoundPage.jsx
│
├── services/           # Capa de comunicación con API
│   ├── api.js          # ⭐ Config Axios (UNA VEZ)
│   ├── productosService.js
│   └── authService.js
│
├── store/              # Estado global (Zustand)
│   ├── useAuthStore.js
│   └── useThemeStore.js
│
├── proteccionRutas/    # Rutas protegidas
│   ├── ProtectedRoute.jsx
│   └── AdminRoute.jsx
│
├── router/             # Configuración de rutas
│   └── AppRouter.jsx
│
├── endpoint/           # URLs centralizadas del backend
│   └── endpoints.js
│
├── utils/              # Funciones auxiliares
│   ├── formatDate.js
│   ├── validateEmail.js
│   ├── calculateTotal.js
│   └── capitalize.js
│
└── styles/             # Estilos CSS
    └── index.css
```

### Ejemplos de uso

#### 🪝 Usar el hook useFetch

```javascript
import { useFetch } from '../hooks/useFetch';

function ProductosPage() {
  const { data, loading, error, refetch } = useFetch('/productos');
  
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {data.map(producto => (
        <div key={producto.id}>{producto.nombre}</div>
      ))}
      <button onClick={refetch}>Recargar</button>
    </div>
  );
}
```

#### 🗄️ Usar Zustand Store

```javascript
import { useAuthStore } from '../store/useAuthStore';

function Header() {
  const { user, logout } = useAuthStore();
  
  return (
    <header>
      <span>Bienvenido, {user?.nombre}</span>
      <button onClick={logout}>Cerrar sesión</button>
    </header>
  );
}
```

#### 🔒 Proteger rutas

```javascript
import { ProtectedRoute } from '../proteccionRutas/ProtectedRoute';

<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  } 
/>
```

---

## 📚 Recursos y Referencias

- [Documentación de Prisma ORM](https://www.prisma.io/docs)
- [Documentación de React](https://react.dev/)
- [Documentación de Vite](https://vitejs.dev/)
- [React Router v6](https://reactrouter.com/)
- [Zustand (Estado global)](https://zustand-demo.pmnd.rs/)
- [Axios](https://axios-http.com/)

---

## 👥 Integrantes

- **[Nombre Completo]** - Legajo: [XXXXX]
- **[Nombre Completo]** - Legajo: [XXXXX]
- **[Nombre Completo]** - Legajo: [XXXXX]
- **[Nombre Completo]** - Legajo: [XXXXX]

---

## 📄 Documentación Adicional

- Ver `Auditoria_Semana_3.md` para detalles completos de la migración
- Ver `Leer.md` para instrucciones del TP original

---

## 📝 Notas Importantes

⚠️ **Importante para Prisma:**
- Prisma usa una sola variable `DATABASE_URL` en lugar de múltiples variables (DB_HOST, DB_USER, etc.)
- Después de modificar `schema.prisma`, siempre ejecutar `npx prisma generate`
- Usar `npx prisma studio` para ver y editar datos visualmente

⚠️ **Importante para el Frontend:**
- Las variables de entorno en Vite deben empezar con `VITE_`
- Axios se configura una sola vez en `services/api.js`
- Los custom hooks están en la carpeta `hooks/`

---

**Última actualización:** Noviembre 2025  
**Estado del proyecto:** ✅ Completado - Semana 3

# 🚀 Guía Rápida de Comandos - Grupo 12

## 📦 Instalación Inicial

### Backend
```powershell
# En la raíz del proyecto
npm install

# Crear archivo .env (copiar de .env.example y editarlo)
copy .env.example .env
```

### Frontend
```powershell
cd frontend
npm install
```

---

## 🔷 Comandos de Prisma

### Primera vez (después de configurar .env)
```powershell
# 1. Importar estructura de la base de datos existente
npm run prisma:pull

# 2. Generar el cliente Prisma
npm run prisma:generate
```

### Comandos útiles
```powershell
# Ver datos en interfaz gráfica
npm run prisma:studio

# Formatear schema.prisma
npx prisma format

# Aplicar cambios del schema a la DB (desarrollo)
npx prisma db push

# Crear migración (producción)
npx prisma migrate dev --name nombre_de_migracion
```

---

## 🚀 Iniciar Servidores

### Backend (Puerto 3000)
```powershell
# Modo desarrollo (con auto-reload)
npm run dev

# Modo producción
npm start
```

### Frontend (Puerto 5173)
```powershell
cd frontend
npm run dev
```

---

## 🔧 Desarrollo

### Ver logs del servidor
El servidor mostrará:
- ✅ Conexión a la base de datos
- 📍 Rutas disponibles
- 🔍 Queries de Prisma (en modo log)

### Probar endpoints
```powershell
# Ejemplos con curl o usar Postman/Thunder Client

# GET - Obtener productos
curl http://localhost:3000/api/productos

# GET - Obtener producto por ID
curl http://localhost:3000/api/productos/1

# POST - Crear producto
curl -X POST http://localhost:3000/api/productos -H "Content-Type: application/json" -d "{\"nombre\":\"Producto\",\"descripcion\":\"Desc\",\"categoria\":\"Cat\",\"cantidad\":10}"
```

---

## 📁 Estructura de Archivos Creados

### Backend
```
✅ /prisma/schema.prisma          # Modelos de la BD
✅ /prisma/prisma.config.js       # Config dotenv
✅ /src/config/prisma.js          # Cliente centralizado
✅ /src/controllers/*.prisma.js   # Controladores con Prisma
✅ /.env.example                  # Variables de entorno
✅ /package.json                  # Dependencias actualizadas
```

### Frontend
```
✅ /frontend/src/components/      # Componentes UI
✅ /frontend/src/hooks/           # Custom hooks
✅ /frontend/src/pages/           # Páginas
✅ /frontend/src/services/        # Axios + servicios
✅ /frontend/src/store/           # Zustand stores
✅ /frontend/src/router/          # Rutas
✅ /frontend/src/proteccionRutas/ # Rutas protegidas
✅ /frontend/src/endpoint/        # URLs centralizadas
✅ /frontend/src/utils/           # Funciones auxiliares
✅ /frontend/src/styles/          # Estilos CSS
```

---

## ⚠️ Errores Comunes

### Error: P1001 (Can't reach database)
```
❌ Causa: DATABASE_URL incorrecta o MySQL no está corriendo
✅ Solución: Verificar .env y asegurarse que MySQL esté activo
```

### Error: @prisma/client not found
```
❌ Causa: No se generó el cliente Prisma
✅ Solución: npm run prisma:generate
```

### Error: Cannot find module 'dotenv/config'
```
❌ Causa: dotenv no está instalado
✅ Solución: npm install dotenv
```

### Frontend: Cannot find module
```
❌ Causa: No se instalaron las dependencias del frontend
✅ Solución: cd frontend && npm install
```

---

## 🎯 Checklist de Verificación

### Antes de empezar
- [ ] Node.js instalado (v20+)
- [ ] MySQL instalado y corriendo
- [ ] Base de datos creada
- [ ] `.env` configurado con DATABASE_URL correcta

### Backend
- [ ] `npm install` ejecutado
- [ ] `npm run prisma:pull` ejecutado exitosamente
- [ ] `npm run prisma:generate` ejecutado exitosamente
- [ ] `npm run dev` inicia sin errores
- [ ] Servidor responde en http://localhost:3000

### Frontend
- [ ] `cd frontend && npm install` ejecutado
- [ ] `.env` del frontend configurado
- [ ] `npm run dev` inicia sin errores
- [ ] Aplicación carga en http://localhost:5173

---

## 📝 Próximos Pasos

1. **Migrar todos los controladores a Prisma**
   - Reemplazar consultas SQL por métodos Prisma
   - Manejar errores con códigos de Prisma (P2025, etc.)

2. **Completar el frontend**
   - Conectar todas las páginas con los servicios
   - Implementar formularios completos
   - Agregar validaciones

3. **Agregar características**
   - Autenticación JWT
   - Validación de datos (Zod)
   - Manejo de errores global
   - Paginación
   - Búsqueda y filtros

---

## 💡 Tips Útiles

### Prisma
- Usar `npx prisma studio` para ver datos visualmente
- Después de cambiar `schema.prisma`, siempre hacer `generate`
- Los logs de Prisma muestran las queries SQL generadas

### Frontend
- Los hooks personalizados están en `/hooks`
- Axios se configura UNA vez en `/services/api.js`
- Las rutas protegidas están en `/proteccionRutas`
- El estado global usa Zustand (más simple que Redux)

### Git
```powershell
# Antes de hacer commit
git add .
git commit -m "feat: migración a Prisma ORM + frontend React"
git push origin main
```

---

**Documentación completa:** Ver `README_COMPLETO.md`  
**Auditoría del TP:** Ver `Auditoria_Semana_3.md`

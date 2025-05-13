# STS_NODE API

Bienvenido al repositorio de **STS_NODE**, una API RESTful desarrollada con Node.js, Express y PostgreSQL, diseñada para manejar operaciones de usuarios y transacciones financieras de forma eficiente y escalable.

---

## 📐 Arquitectura del Proyecto

El proyecto sigue una arquitectura **MVC por capas**, separando responsabilidades claramente:

```
STS_NODE/
├── controller/         # Maneja la lógica HTTP (requests/responses)
├── service/            # Contiene la lógica de negocio
├── model/              # Interacción directa con la base de datos PostgreSQL
├── config/             # Configuración de la base de datos y variables de entorno
├── .github/workflows/  # CI/CD con Railway mediante GitHub Actions
├── .railway/           # Configuración del proyecto y servicio Railway
├── index.js            # Punto de entrada del servidor Express
```

---

## 🚀 Endpoints disponibles

Esta API incluye funcionalidades para:

- Registro de usuarios
- Consulta de todos los usuarios
- Creación de transacciones entre usuarios
- Validación de saldos
- Historial de transacciones

---

## 📊 Documentación Swagger (OpenAPI)

La API incluye documentación interactiva mediante **Swagger UI**.

### Acceso:

> Una vez el servidor esté corriendo, visita:

```
http://localhost:3000/docs
```

O si fue desplegado en Railway:

```
https://stsnode-production.up.railway.app/docs
```

### ¿Qué puedes hacer ahí?

- Probar los endpoints (`POST`, `GET`)
- Ver ejemplos de entrada y respuesta
- Consultar esquemas de datos (JSON)

---

## 🛠️ Configuración local

### Variables de entorno

Crea un archivo `.env` con los siguientes campos:

```env
PORT=3000
DB_HOST=<tu_host_postgresql>
DB_USER=<usuario_postgresql>
DB_PASS=<contraseña>
DB_NAME=<nombre_base_de_datos>
```

### Instalación

```bash
npm install
npm run start
```

---

## ⚙️ CI/CD con Railway + GitHub Actions

Este proyecto está preparado para desplegarse automáticamente en [Railway](https://railway.app) cada vez que haces `git push` a la rama `main`.

Asegúrate de:

1. Tener un token de tipo **Deployment** guardado como `RAILWAY_TOKEN` en los secrets de GitHub.
2. El archivo `.railway/project.json` está presente.
3. El workflow `.github/workflows/deploy.yml` está activo.

---
## 🔐 Seguridad y Autenticación (por implementar)

- **JWT (JSON Web Tokens)**  
  Manejo de sesiones seguras mediante `jsonwebtoken`.  
  - Generar tokens al hacer login.
  - Verificar tokens en rutas protegidas con middleware personalizado.
  - Incluir `req.user` con los datos del usuario autenticado.

- **Encriptación de contraseñas**  
  Usar `bcrypt` para almacenar contraseñas de forma segura.  
  - `bcrypt.hash(password, saltRounds)` al registrar.
  - `bcrypt.compare(input, hashed)` al autenticar.

---

## 📊 Observabilidad y Monitoreo (por implementar)

- **Morgan (logger HTTP)**  
  Registrar automáticamente cada request entrante.  
  ```bash
  npm install morgan
  ```
  ```js
  const morgan = require('morgan');
  app.use(morgan('dev'));
  ```

- **Helmet (seguridad de headers)**  
  Protege tu app de ataques comunes agregando headers seguros.  
  ```bash
  npm install helmet
  ```
  ```js
  const helmet = require('helmet');
  app.use(helmet());
  ```

- **Rate Limiting (anti-spam/DDOS)**  
  Limita el número de peticiones por IP para evitar abuso.  
  ```bash
  npm install express-rate-limit
  ```
  ```js
  const rateLimit = require('express-rate-limit');
  const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
  app.use(limiter);
  ```
---

## 📬 Contacto

Para dudas o soporte, contáctame a través de [LinkedIn](https://www.linkedin.com/in/joel-vargas-reynoso) o abre un issue en este repositorio.

---

¡Gracias por usar STS_NODE! 🚀



# Category system 🗃️

Este es el repositorio para el proyecto **Category system 🗃️**, una aplicación backend y frontend.

## Postman documentacion - API

```bash
https://documenter.getpostman.com/view/39094407/2sAY4sk543
```

## Stack backend

- Express.js
- MongoDB

## Stack frontend

- Angular
- Tailwind.css

## 1. Pasos para comenzar

Sigue estos pasos para clonar el repositorio, ejecutar el proyecto y configurar el entorno de desarrollo:

### 1.1. Clonar el repositorio

Abre tu terminal y ejecuta el siguiente comando para clonar este repositorio:


```bash
git clone https://github.com/ST-Emmanuel00/category_system_full_project.git 
```

### 1.2. Instalar backend dependencias
Navega hasta el directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```
cd api
npm install
```

### 1.3. Instalar frontend dependencias
Navega hasta el directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```
cd ui
npm install
```

### 1.3. Instalar TypeScript de manera global
Asegúrate de tener TypeScript instalado globalmente. Si aún no lo has hecho, puedes instalarlo usando npm:

```
npm i -g typescript

// Verificar typescript
tsc --version
```

## 2. Uso de docker

Puedes usar Docker para instanciar las bases de datos de desarrollo y pruebas y para crear la imagen del proyecto. Aquí te dejamos los pasos.

```
cd api
```

## 3. Informacion sobre el backend

Variables de entorno necesarias para la ejecucion del proyecto:

```
cd api
```

### 3.1. Entorno template

```
PORT=
NODE_ENV=
DATABASE_URL=
```

### 3.2 Base de datos URL (DATABASE_URL)

```
DATABASE_URL="mongodb+srv://categorySystem:KXbE0uMFRSDT7jXW@categorysystem.86bue.mongodb.net/category_system?retryWrites=true&w=majority"
```

## 3.4 Ejecutar las migraciones de la base de datos

Para configurar la base de datos, debes ejecutar las migraciones. Dependiendo del entorno, usa el siguiente comando:

### 3.4.1. Desarrollo
```
npm run migrate:dev
```
### 3.4.2. Pruebas
```
npm run migrate:test
```
## 3.5. Llenar base de datos con datos

Una vez que hayas configurado la base de datos, puedes poblarla con datos de prueba. Usa el siguiente comando según el entorno:

### 3.5.1. Desarrollo
```
npm run seed:dev
```
### 3.5.2. Pruebas
```
npm run sedd:test
```

## 3.6. Ejecutar en modo desarrollo
Inicia el servidor Express.js con TypeScript en modo desarollo ejecutando el siguiente comando:

```
npm run start:dev
```

## 3.7. Ejecutar pruebas
Este proyecto incluye varias pruebas automatizadas que puedes ejecutar. Aquí te dejamos los comandos para los distintos tipos de pruebas:


### 3.7.1. Todas las pruebas:
```
npm run test
```
### 3.7.2. Cobertura de pruebas:
```
npm run test:coverage
```

## 3.8 Desplegar proyecto

### 3.8.1. Generar la imagen del proyecto

Para generar la imagen Docker de tu proyecto, asegúrate de que tu Dockerfile esté correctamente configurado y ejecuta:

Asegurate de definir la version

```
docker build -t cs:version .
```

### 3.8.2. Ejecutar la imagen del proyecto

Una vez que la imagen haya sido generada, puedes ejecutar el proyecto con:

```
docker compose up api
```

## 3.9 Probar el API
Una vez que el servidor esté en funcionamiento, puedes probar el API utilizando cualquier herramienta de postman. El host para acceder al API es http://localhost:<PORT>/api. Asegúrate de usar las rutas correctas definidas en tu aplicación para interactuar con los endpoints correspondientes y el puerto definido

# 4. Frontend intrucciones

## 3.6. Ejecutar en modo desarrollo
Inicia modo desarollo ejecutando el siguiente comando:

```
npm run watch
```

## 3.6. Ejecutar en modo desarrollo
Inicia modo desarollo ejecutando el siguiente comando:

```
npm run watch
```
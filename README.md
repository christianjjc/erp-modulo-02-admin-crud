<base target="_blank">

# Proyecto ERP

## Módulo 01:
- Autenticación de Usuarios
### 1. Secciones del Proyecto (Alcance):
- Gestión de usuarios (CRUD).
- Pantalla inicial una vez realizada la autenticación y la autorización.
### 2. Librerías y Componentes Necesarios:
- ***Docker*** --> Debe descargar e instalar el demonio de docker: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
- ***PostgreSQL*** --> Se necesita descargar e instalar un cliente de base de datos Postgres como:
> - PgAdmin >> [https://www.pgadmin.org/download/](https://www.pgadmin.org/download/)<br>
> - TablePlus >> [https://tableplus.com/](https://tableplus.com/)
- ***Prisma DB*** --> Usaremos un cliente manejador de consultas para base de datos: [https://www.prisma.io/orm](https://www.prisma.io/orm)

- ***NextAuth.js*** --> Librería para autenticación de usuarios provisto por Next: [https://next-auth.js.org/getting-started/introduction](https://next-auth.js.org/getting-started/introduction)

- ***Tailwind CSS*** --> Librería CSS para desarrollar el layout y demás características UI de la app: [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)
### 3. Pasos para Levantar el Proyecto:
#### 3.1 Clonar el repositorio:
- Abra la terminal en la ruta donde instalará el proyecto.
- Copie la siguiente instrucción y péguelo en la terminal que use (Gitbash, cmd, VsCode).
``` bash
git clone https://github.com/christianjjc/next-autenticacion.git
```
#### 3.2 Instalamos todas las dependencias del proyecto:
```bash
npm install
```
#### 3.3 Iniciar el demonio de Docker o Docker daemon.
- Iniciar el software de Docker. Asegúrese que se esté ejecutando sin problemas.
#### 3.4 Archivo .env:
- Renombrar el archivo ***".env.template"*** como ***".env"***
- Reemplazar las variables según las que correspondan con su entorno.
#### 3.5 Generar la imagen de la base de datos PostgreSQL en Docker.
- Para ello deberá ejecutar el siguiente comando para crear el contenedor
``` bash
docker compose up -d
```
#### 3.6 Ejecutar los comandos de Prisma:
- Iniciamos la librería prisma con la configuración por defecto.
```bash
npx prisma init
```
- Generar la base de datos según el esquema Prisma ubicado en el proyecto.
```bash
npx prisma migrate dev
```
- Iniciamos el cliente Prisma con todas la consultas necesarias.
```bash
npx prisma generate
```
#### 3.7 Llenar la BD con data de ejemplo:
```bash
npm run seed
```
#### 3.8 Iniciamos el Proyecto:
```bash
npm run dev
```
### 4. Ingresa a la app [http://localhost:3000/](http://localhost:3000/)

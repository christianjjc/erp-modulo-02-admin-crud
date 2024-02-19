# Proyecto ERP

## Módulo 01:

- Autenticación de Usuarios

### 1. Secciones del Proyecto (Alcance):

- Gestión de usuarios (CRUD).
- Pantalla inicial una vez realizada la autenticación y la autorización.

### 2. Librerías y Componentes Necesarios:

- **_Docker_** --> Debe descargar e instalar el demonio de docker: <a href="https://www.docker.com/products/docker-desktop/" target="_blank">https://www.docker.com/products/docker-desktop/</a>
- **_PostgreSQL_** --> Se necesita descargar e instalar un cliente de base de datos Postgres como:
  > - PgAdmin >> <a href="https://www.pgadmin.org/download/" target="_blank">https://www.pgadmin.org/download/</a><br>
  > - TablePlus >> <a href="https://tableplus.com/" target="_blank">https://tableplus.com/</a>
- **_Prisma DB_** --> Usaremos un cliente manejador de consultas para base de datos: <a href="https://www.prisma.io/orm/" target="_blank">https://www.prisma.io/orm/</a>
- **_NextAuth.js_** --> Librería para autenticación de usuarios provisto por Next: <a href="https://next-auth.js.org/getting-started/introduction" target="_blank">https://next-auth.js.org/getting-started/introduction</a>

- **_Tailwind CSS_** --> Librería CSS para desarrollar el layout y demás características UI de la app: <a href="https://tailwindcss.com/docs/installation" target="_blank">https://tailwindcss.com/docs/installation</a>

### 3. Pasos para Levantar el Proyecto:

#### 3.1 Clonar el repositorio:

- Abra la terminal en la ruta donde instalará el proyecto.
- Copie la siguiente instrucción y péguelo en la terminal que use (Gitbash, cmd, VsCode).

```bash
git clone https://github.com/christianjjc/erp-modulo-01-autenticacion.git
```

#### 3.2 Instalamos todas las dependencias del proyecto:

```bash
npm install
```

#### 3.3 Iniciar el demonio de Docker o Docker daemon.

- Iniciar el software de Docker. Asegúrese que se esté ejecutando sin problemas.

#### 3.4 Archivo .env:

- Renombrar el archivo **_".env.template"_** como **_".env"_**
- Reemplazar las variables según las que correspondan con su entorno.

#### 3.5 Generar la imagen de la base de datos PostgreSQL en Docker.

- Para ello deberá ejecutar el siguiente comando para crear el contenedor

```bash
docker compose up -d
```

#### 3.6 Ejecutar los comandos de Prisma:

- Iniciamos la librería prisma con la configuración para PostgreSQL.

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

### 4. Ingresa a la app <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a>

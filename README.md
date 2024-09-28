# muni-challenge

# Proyectos
En el repositorio estan tanto el server como el cliente.
El cliente es muni-challenge
El server es muni-challenge-node

# Clonar el repo
git clone https://github.com/joajo13/muni-challenge.git

# Navegar al proyecto que desean correr
cd muni-challenge
cd muni-challenge-node

# Correr el proyecto
npm run dev

# Database para el server
Al configurar el .env deben crear unicamente la base de datos, las tablas las genera automaticamente sequelize.

# .env
SECRET_KEY=your_secret_key
JWT_SECRET=your_jwt_secret

DB_HOST="localhost"
DB_USER="root"
DB_PASSWORD=""
DB_NAME="muni-challenge-test"
PORT=5002
FTP_HOST=66.220.9.50
FTP_USER=juanbejamingiupponi
FTP_PASSWORD=abc123$
FTP_PORT=21
DRIVE_HQ_HOST=https://www.drivehq.com/file/df.aspx/publish/juanbejamingiupponi/muni-challenge/

# .env cliente
VITE_API_URL=http://localhost:5000

Esta debe ser la url del servidor.

# Imagenes
En el caso de querer ver las imagenes estaticas, se requiere de hacer un "publish" en el proveedor del Server FTP.
Las credenciales son estas:
juanbejamingiupponi
abc123$

Una vez hayamos ingresado, ir a My Storage, seleccionar el checkbox de la carpeta muni-challenge y tocar el boton publish.
De esta manera se siren estaticamente durante un periodo de tiempo delimitado.

# Dashboard
Al correr el servidor se crea un usuario admin con las credenciales:
usuario: admin
password: admin

# Video
https://youtu.be/r7HF_IiPhR4

# Establecer la imagen base
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de la aplicación
COPY package*.json tsconfig.json swagger.json /app/
COPY src /app/src

# Instalar las dependencias de la aplicación
RUN npm install

# Compilar el código fuente TypeScript
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 4000

# Ejecutar la aplicación
CMD ["npm", "start"]
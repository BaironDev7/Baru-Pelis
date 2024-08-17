# Instalación 🚀

Para configurar y ejecutar el proyecto localmente, sigue estos pasos:

1. **Clona el Repositorio:**

   Abre tu terminal y clona el repositorio con el siguiente comando:

   `git clone https://github.com/tu_usuario/tu_repositorio.git`

   Luego, navega al directorio del proyecto:

   `cd tu-repositorio`

2. **Instala las dependencias:**

   Dentro del directorio del proyecto, instala las dependencias necesarias ejecutando:
   `npm install`

3. **Configura las variables de entono:**

   Crea un archivo llamado .env en la raíz del proyecto. Dentro de este archivo, agrega tu clave de API de TMDB en el siguiente formato:
   `VITE_TMDB_API_KEY=tu_api_key_aqui`
   Asegúrate de reemplazar tu_api_key_aqui con tu clave de API personal de TMDB.

4. **Inicia el servidor de desarrollo:**

   Ejecuta el siguiente comando para iniciar el servidor de desarrollo:
   `npm run dev`
   Esto abrirá la aplicación en `http://localhost:5173`

5. **Despliegue en producción:**
   Para desplegar la aplicación en un entorno de producción, como Vercel o Netlify, asegúrate de configurar la variable de entorno `VITE_TMDB_API_KEY` en la plataforma de despliegue.

¡Listo! Ahora deberías tener la aplicación corriendo en tu entorno local. 🚀

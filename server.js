// server.js
import express from "express";

const app = express();
const port = 3000;

// Middleware para servir archivos estáticos generados por Vite (opcional)
app.use(express.static("dist")); // Si quieres servir tu app de React desde el build de Vite

// Ruta básica
app.get("/", (req, res) => {
  res.send("¡Servidor Express funcionando!");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

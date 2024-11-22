const express = require('express');
const app = express();
const PORT = 3000;

// Servir arquivos estáticos
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

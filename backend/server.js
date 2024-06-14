const express = require('express');
const multer = require('multer'); // Pacote para lidar com upload de arquivos

const app = express();
const port = 5173;

// Configuração do Multer para salvar os arquivos no diretório 'uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Onde os arquivos serão salvos
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Nome do arquivo no servidor será o original
  },
});
const upload = multer({ storage });

// Rota para lidar com o upload de arquivos
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo foi enviado.');
  }
  // Aqui você pode processar o arquivo enviado, se necessário
  res.send({ success: true, fileName: req.file.originalname });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

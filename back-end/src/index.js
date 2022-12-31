const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

import express from 'express';
import path from 'path';
import { DataBase } from '../src/scripts/db.js';

const db = new DataBase;
const __dirname = process.cwd();

const server = express();

server.use(express.json());

server.listen(8080, () => {
  console.log('Servidor Conectado!');
});

server.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, 'routes/profiles.html'));
});

server.get('/profiles', (req, res) => {
  return res.status(200).send(db.getList());
});

server.post('/profiles',(req, res) => {
  const { nome, idade, descricao } = req.body;
  db.create({
    nome,
    idade,
    descricao
  });
  return res.status(201).send();
});
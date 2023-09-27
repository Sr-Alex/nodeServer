import express from 'express';
import { DataBase } from '../src/scripts/db.js';

const db = new DataBase;

const server = express();

server.use(express.json());

server.listen(8080, () => {
  console.log('Servidor Conectado!');
});

server.get('/index', (req, res) => {
  return res.status(200).send();
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
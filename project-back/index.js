import express from 'express';
import bodyParser from 'body-parser';
import { randomUUID as uuid } from 'crypto';
const port = 3333;
const app = express();

let saldoPrincipal = 0;
let transacoes = [];

app.use(bodyParser.json());

app.use((request, response, next) => {
  console.log(`Caminho: ${request.path}`);
  next();
});

app.get('/transacoes', (request, response) => {
  response.json({transacoes});
});

app.post('/transacoes', (request, response) => {
  const { tipo, valor } = request.body;
  if (!tipo || !valor) {
      return response.status(400).json({ error: 'Tipo e valor são obrigatórios.' });
  }
  if (tipo !== 'debito' && tipo !== 'credito') {
      return response.status(400).json({ error: 'Tipo de transação inválido.' });
  }

  if (tipo === 'debito') {
    if(saldoPrincipal < valor) {
      return response.status(400).json({ error: 'Saldo insuficiente.' })
    }
      saldoPrincipal -= valor;
  } else {
      saldoPrincipal += valor;
  }
  transacoes.push({ id: uuid(), tipo, valor });
  response.status(201).json({ message: 'Transação criada com sucesso.' });
});


app.put('/transacoes/:id', (request, response) => {
  const { id } = request.params;
  const { tipo, valor } = request.body;
  const transacao = transacoes.find(t => t.id === id);

  if (!transacao) {
    return response.status(404).json({ error: 'Transação não encontrada.' });
  }


  if (transacao.tipo === 'debito') {
    saldoPrincipal += transacao.valor;
  } else if (transacao.tipo === 'credito') {
    saldoPrincipal -= transacao.valor;
  }

  if (tipo) {
    transacao.tipo = tipo;
  }
  if (valor) {
    transacao.valor = valor;
  }

  if (transacao.tipo === 'debito') {
    saldoPrincipal -= transacao.valor;
  } else if (transacao.tipo === 'credito') {
    saldoPrincipal += transacao.valor;
  }

  response.json({ message: 'Transação atualizada com sucesso.' });
});


app.delete('/transacoes/:id', (request, response) => {
  const { id } = request.params;

  const index = transacoes.findIndex(t => t.id === parseInt(id));
  if (index === -1) {
      return response.status(404).json({ error: 'Transação não encontrada.' });
  }

  transacoes.splice(index, 1);

  response.json({ message: 'Transação deletada com sucesso.' });
});

app.patch('/transacoes/:id', (request, response) => {
  const { id } = request.params;
  const { tipo, valor } = request.body;

  const transacao = transacoes.find(t => t.id === parseInt(id));
  if (!transacao) {
      return response.status(404).json({ error: 'Transação não encontrada.' });
  }


  if (transacao.tipo === 'debito') {
    saldoPrincipal += transacao.valor;
  } else if (transacao.tipo === 'credito') {
    saldoPrincipal -= transacao.valor;
  }

  if (tipo) {
    transacao.tipo = tipo;
  }
  if (valor) {
    transacao.valor = valor;
  }

  if (transacao.tipo === 'debito') {
    saldoPrincipal -= transacao.valor;
  } else if (transacao.tipo === 'credito') {
    saldoPrincipal += transacao.valor;
  }
  res.json({ message: 'Transação atualizada parcialmente com sucesso.' });
});


app.get('/saldo', (request, response) => {
  response.json({ saldoPrincipal });
});

app.listen(port, () => {
  console.log('Listing de port ' + port);
})


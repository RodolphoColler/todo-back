const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
const route = require('./routes');

app.use(bodyParser.json());
app.use(cors());

app.use('/todo', route.todo);

app.listen(3001, () => {
  console.log(`Escutando na porta ${3001}`);
});

module.exports = app;

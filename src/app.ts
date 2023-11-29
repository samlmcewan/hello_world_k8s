import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const configVar = process.env.HELLO_WORLD_CONFIG_VAR || 'default-value';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(
    `<h1>${configVar}</h1>`);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
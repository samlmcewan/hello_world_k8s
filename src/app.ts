import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1 style="font-family: sans-serif;">Hello World.</h1><p>A service using k8s, node, TypeScript</p>');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
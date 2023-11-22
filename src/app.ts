import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1 style="font-family: sans-serif;color:teal;">Hello World.</h1><ul><li>NodeJS</li><li>Express</li><li>TypeScript</li><li>Docker</li><li>k8s</li></ul>');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
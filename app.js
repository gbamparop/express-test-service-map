const apm = require('elastic-apm-node').start({
  serviceName: 'test-be',
  secretToken: 'your-secret-token',
  serverUrl: 'your-server-url',
  environment: 'dev'
})

const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, "views")));
app.set('view engine', 'ejs');

const port = 3000;

app.get('/', (req, res) => {
  res.send({ message: 'Hello world!' });
});
app.get('/page', (req, res) => {
  res.render('page');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});
const app = require('./app.js');

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log('Rodando na porta: ', port);
});


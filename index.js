const express = require ('express');
const parser = require('body-parser');
const services = require('./services');
const handlify = require('./handlers');

const usersHandler = handlify('users');
const postsHandler = handlify('posts');

const app = express();

app.use(parser.urlencoded({ extended: false }));

app.use(parser.json());

const port = 3000;

app.get('/', usersHandler(services).get);
app.post('/', usersHandler(services).post);
app.put('/:id', usersHandler(services).put);
app.delete('/:id', usersHandler(services).delete);

app.get('/posts', postsHandler(services).get);
app.post('/posts', postsHandler(services).post);
app.put('/posts/:id', postsHandler(services).put);
app.delete('/posts/:id', postsHandler(services).delete);

app.listen(port, () => console.log(`Port: ${ port }`));
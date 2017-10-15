import * as restify from 'restify';
import {Next, Request, Response, Server} from 'restify';
import {ServerTodoItem, todos} from './data';
import {filterObject} from './util';
import * as corsMiddleware from 'restify-cors-middleware';

const server: Server = restify.createServer();
server.use(restify.plugins.bodyParser());

const cors = corsMiddleware({
  origins: ['*']
});

server.pre(cors.preflight);
server.use(cors.actual);

server.get('/todos', (request: Request, response: Response, next: Next) => {
  response.send(200, todos);
  return next();
});

server.get('/todos/:nr', (request: Request, response: Response, next: Next) => {
  const todo = todos.find((t) => t.nr === request.params.nr);

  if (!todo) {
    response.send(404);
    return next();
  }

  response.send(200, todo);
  return next();
});

server.put('/todos', (request: Request, response: Response, next: Next) => {
  const maxNr = todos.reduce((n, todo) => +todo.nr > +n ? +todo.nr : +n, 0);
  const createdTodo = {
    ...filterObject<ServerTodoItem>(request.body, ['title', 'description', 'done']),
    nr: '' + (maxNr + 1)
  };

  todos.push(createdTodo);
  response.send(200, createdTodo);
  return next();
});

server.post('/todos/:nr', (request: Request, response: Response, next: Next) => {
  const todoIndex = todos.findIndex((t) => t.nr === request.params.nr);

  if (todoIndex === -1) {
    response.send(404);
    return next();
  }

  todos[todoIndex] = {
    ...todos[todoIndex],
    ...filterObject<ServerTodoItem>(request.body, ['title', 'description', 'done'])
  };

  response.send(200, todos[todoIndex]);
  return next();
});

server.listen(8080, function() {
  console.log('Todo Server %s listening at %s', server.name, server.url);
});

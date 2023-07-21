const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Tranquil Life';

app.get('/', (request, response) => {
  response.send('Oh hey peace of mind');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.locals.tasks = [
  {
    daily: []
  },
  {
    weekly: []
  },
  {
    monthly: []
  },
  {
    seasonal: []
  },
  {
    annual: []
  }
]

app.get('/api/v1/tasks', (request, response) => {
  const tasks = app.locals.tasks;

  response.json({ tasks });
})

app.get('/api/v1/tasks/:id', (request, response) => {
  const { id } = request.params;
  const task = app.locals.tasks.find(task => task.id === parseInt(id));
  if (!task) {
    return response.sendStatus(404);
  }
  response.status(200).json(task);
});

app.post('/api/v1/tasks', (request, response) => {
  const id = Date.now();
  const task = request.body;

  for (let requiredParameter of ['name', 'shop', 'id', 'instagram']) {
    if (!task[requiredParameter]) {
      response
        .status(422)
        .send({ error: `Expected format: { name: <String>, type: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }
  
  const { name, shop, instagram } = task;
  app.locals.tasks.push({ name, id, shop, instagram });
  response.status(201).json({ name, id, shop, instagram });
});

app.delete('/api/v1/tasks/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const index = app.locals.tasks.findIndex(task => task.id === id);
  if (index === -1) {
    return response.sendStatus(404);
  }
  const deletedTask = app.locals.tasks.splice(index, 1)[0];
  response.status(200).json(deletedtask);
});

app.get('/', (request, response) => {
});
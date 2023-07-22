const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Tranquil Life';

app.get('/', (request, response) => {
  response.send('Oh hey peace of mind');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.use(express.static('public'));
app.use(cors());

app.locals.tasks = [
  {
      daily: [
        { id: 1, name: "Make the bed", key: 1 },
        { id: 2, name: "Squeegee the shower walls", key: 2 },
        { id: 3, name: "Rinse the bathroom sink", key: 3 },
        { id: 4, name: "Empty coffee grounds into the compost or garbage", key: 4 },
        { id: 5, name: "Rid the sink of any dirty dishes", key: 5 },
        { id: 6, name: "Unload and load the dishwasher", key: 6 },
        { id: 7, name: "Wipe down countertops and cabinets", key: 7 },
        { id: 8, name: "Wipe down the stovetop", key: 8 },
        { id: 9, name: "Put away any loose items (mail, toys, blankets, water bottles, etc.)", key: 9 },
        { id: 10, name: "Tidy up remote controls, video games, and other electronic items", key: 10 },
        { id: 11, name: "Do a load of laundry (based on needs)", key: 11 },
      ],
      weekly: [
        { id: 12, name: "Sweep or vacuum the kitchen floor", key: 12 },
        { id: 13, name: "Mop the kitchen floor, using mostly water to prevent the buildup of residue", key: 13 },
        { id: 14, name: "Clean the inside of the microwave", key: 14 },
        { id: 15, name: "Sanitize sponges", key: 15 },
        { id: 16, name: "Wipe down fridge shelves", key: 16 },
        { id: 17, name: "Wipe fronts of cabinets and handles", key: 17 },
        { id: 18, name: "Scrub bathroom sink, toilet, and bathtub or shower", key: 18 },
        { id: 19, name: "Spray the shower curtain liner with disinfectant to help prevent mold", key: 19 },
        { id: 20, name: "Wipe down mirrors", key: 20 },
        { id: 21, name: "Dust furniture", key: 21 },
        { id: 22, name: "Empty all small trash cans", key: 22 },
        { id: 23, name: "Toss expired food from the fridge and pantry", key: 23 },
        { id: 24, name: "Clean windows", key: 24 },
        { id: 25, name: "Dust window ledges", key: 25 },
        { id: 26, name: "Tidy up pet spaces", key: 26 },
        { id: 27, name: "Clean pet bowls with soapy water", key: 27 },
      ],
      monthly: [
        { id: 28, name: "Scrub grout", key: 28 },
        { id: 29, name: "Wipe insides of medicine cabinets", key: 29 },
        { id: 30, name: "Wipe tub and shower surrounds", key: 30 },
        { id: 31, name: "Launder pillow protectors, mattress pads, and shams", key: 31 },
        { id: 32, name: "Dust shelves and storage bins", key: 32 },
        { id: 33, name: "Clean baseboards", key: 33 },
        { id: 34, name: "Discard food in the freezer that's past its prime", key: 34 },
        { id: 35, name: "Wash ventilation hood filters", key: 35 },
        { id: 36, name: "Clean fireplace screen and mantle", key: 36 },
        { id: 37, name: "Wipe insides and outsides of trash and recycling bins", key: 37 },
        { id: 38, name: "Buff waxed stone, masonry, concrete, and wood floors", key: 38 },
        { id: 39, name: "Dust portable and ceiling fans", key: 39 },
        { id: 40, name: "Flush drains with vinegar, boiling water, and baking soda", key: 40 },
        { id: 41, name: "Vacuum window treatments, moldings, and windowsills", key: 41 },
        { id: 42, name: "Wipe interior and exterior doors and trim", key: 42 },
        { id: 43, name: "Wipe switch plates", key: 43 },
        { id: 44, name: "Wipe telephones", key: 44 },
      ],
      seasonal: [
        { id: 45, name: "Turn mattresses", key: 45 },
        { id: 46, name: "Vacuum mattresses, box springs, and bed frames", key: 46 },
        { id: 47, name: "Clean hanging pot rack and polish copper cookware", key: 47 },
        { id: 48, name: "Deep clean oven", key: 48 },
        { id: 49, name: "Organize and wipe down pantry", key: 49 },
        { id: 50, name: "Remove contents of kitchen cabinets and wipe clean", key: 50 },
        { id: 51, name: "Discard expired food items", key: 51 },
        { id: 52, name: "Wipe kitchen ceiling", key: 52 },
        { id: 53, name: "Wipe the inside of the refrigerator", key: 53 },
        { id: 54, name: "Rotate stacked books to prevent warping", key: 54 },
        { id: 55, name: "Clean leather furniture", key: 55 },
        { id: 56, name: "Sweep out fireplace", key: 56 },
        { id: 57, name: "Clean baseboards and moldings", key: 57 },
        { id: 58, name: "Wash filter on washing machine", key: 58 },
        { id: 59, name: "Swap out seasonal clothes and store what is no longer needed", key: 59 },
        { id: 60, name: "Donate old clothes", key: 60 },
        { id: 61, name: "Clean out makeup drawer and throw away expired items", key: 61 },
        { id: 62, name: "Clean shower heads and faucet filters", key: 62 },
      ],
      annual: [
        { id: 63, name: "Remove contents of kitchen cabinets and clean interiors", key: 63 },
        { id: 64, name: "Remove contents of food pantry and clean interiors", key: 64 },
        { id: 65, name: "Throw away expired food items", key: 65 },
        { id: 66, name: "Deep clean oven", key: 66 },
        { id: 67, name: "Deep clean refrigerator and freezer", key: 67 },
        { id: 68, name: "Clean the water tray and filter on the refrigerator", key: 68 },
        { id: 69, name: "Clean out garage; donate items you no longer use", key: 69 },
        { id: 70, name: "Clean gutters", key: 70 },
        { id: 71, name: "Dust air vents; have a professional inspect air ducts", key: 71 },
        { id: 72, name: "Clean behind large appliances", key: 72 },
        { id: 73, name: "Have upholstery and window treatments professionally cleaned", key: 73 },
      ],
    }
  ];

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
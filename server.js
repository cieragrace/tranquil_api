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
      "Make the bed",
      "Squeegee the shower walls",
      "Rinse the bathroom sink",
      "Empty coffee grounds into the compost or garbage",
      "Rid the sink of any dirty dishes",
      "Unload and load the dishwasher",
      "Wipe down countertops and cabinets",
      "Wipe down the stovetop",
      "Put away any loose items (mail, toys, blankets, water bottles, etc.)",
      "Tidy up remote controls, video games, and other electronic items",
      "Do a load of laundry (based on needs)"
    ]
  },
  {
    weekly: [
      "Sweep or vacuum the kitchen floor",
      "Mop the kitchen floor, using mostly water to prevent the buildup of residue",
      "Clean the inside of the microwave",
      "Sanitize sponges",
      "Wipe down fridge shelves",
      "Wipe fronts of cabinets and handles",
      "Scrub bathroom sink, toilet, and bathtub or shower",
      "Spray the shower curtain liner with disinfectant to help prevent mold",
      "Wipe down mirrors",
      "Dust furniture",
      "Empty all small trash cans",
      "Toss expired food from the fridge and pantry",
      "Clean windows",
      "Dust window ledges",
      "Tidy up pet spaces",
      "Clean pet bowls with soapy water"
    ]
  },
  {
    monthly: [
      "Scrub grout",
      "Wipe insides of medicine cabinets",
      "Wipe tub and shower surrounds",
      "Launder pillow protectors, mattress pads, and shams",
      "Dust shelves and storage bins",
      "Clean baseboards",
      "Discard food in the freezer that's past its prime",
      "Wash ventilation hood filters",
      "Clean fireplace screen and mantle",
      "Wipe insides and outsides of trash and recycling bins",
      "Buff waxed stone, masonry, concrete, and wood floors",
      "Dust portable and ceiling fans",
      "Flush drains with vinegar, boiling water, and baking soda",
      "Vacuum window treatments, moldings, and windowsills",
      "Wipe interior and exterior doors and trim",
      "Wipe switch plates",
      "Wipe telephones"
    ]
  },
  {
    seasonal: [
      "Turn mattresses",
      "Vacuum mattresses, box springs, and bed frames",
      "Clean hanging pot rack and polish copper cookware",
      "Deep clean oven",
      "Organize and wipe down pantry",
      "Remove contents of kitchen cabinets and wipe clean",
      "Discard expired food items",
      "Wipe kitchen ceiling",
      "Wipe the inside of the refrigerator",
      "Rotate stacked books to prevent warping",
      "Clean leather furniture",
      "Sweep out fireplace" ,
      "Clean baseboards and moldings",
      "Wash filter on washing machine",
      "Swap out seasonal clothes and store what is no longer needed",
      "Donate old clothes",
      "Clean out makeup drawer and throw away expired items",
      "Clean shower heads and faucet filters"
    ]
  },
  {
    annual: [
      "Remove contents of kitchen cabinets and clean interiors",
      "Remove contents of food pantry and clean interiors",
      "Throw away expired food items",
      "Deep clean oven",
      "Deep clean refrigerator and freezer",
      "Clean the water tray and filter on the refrigerator",
      "Clean out garage; donate items you no longer use",
      "Clean gutters",
      "Dust air vents; have a professional inspect air ducts",
      "Clean behind large appliances",
      "Have upholstery and window treatments professionally cleaned"
    ]
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
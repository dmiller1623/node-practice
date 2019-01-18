const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const bodyParser = require('body-parser');

app.use( bodyParser.json() );

app.use(express.static('public'))

app.set('port', process.env.PORT || 3000);
app.locals.people = [
  {name: 'dennis', age: 28, id: 1},
  {name: 'zack', age: 17, id: 2},
  {name: 'selma', age: 49, id: 3},
  {name: 'mikaela', age: 19, id: 4}
]

app.get('/api/v1/fam', (request, response) => {
  const family = app.locals.people

  return response.json(family)
});

app.get('/api/v1/fam/:id', (request, response) => {
  const id = request.params.id;
  const foundMember = app.locals.people.find(member => {
    return member.id == id
  })
  
  return response.json(foundMember)
})

app.post('/api/v1/fam/', (request, response) => {
  const fam = app.locals.people;
  const id = app.locals.people.length + 1
  const newMember = request.body

  fam.push({ newMember, id })

  return response.json(fam)
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const bodyParser = require('body-parser');

app.use( bodyParser.json() );

app.use(express.static('public'))

app.set('port', process.env.PORT || 3000);

app.get('/api/v1/fam', (request, response) => {
  
});

app.get('/api/v1/fam/:id', (request, response) => {
  const id = request.params.id;
  const foundMember = app.locals.people.find(member => {
    return member.id == id
  })
  
  return response.json(foundMember)
})


app.post('/api/v1/fam', (request, response) => {
  const newMember = request.body;

  database('members').insert(newMember, 'id')
    .then(member => {
      response.status(201).json({ id: member[0] })
    })
})

app.delete('/api/v1/fam/:id', (request, response) => {
  const id = request.params.id;
  
  database('members').where(id, id).delete()
    .then(member => {
      response.status(202).json({ id })
    })

    .catch(error => {
      resonse.status(500).json({ error })
    })
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
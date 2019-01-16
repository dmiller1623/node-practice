const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.people = [
  {name: 'dennis', age: 28, id: 1},
  {name: 'zack', age: 17, id: 2},
  {name: 'selma', age: 49, id: 3},
  {name: 'mikaela', age: 19, id: 4}
]

app.get('/', (request, response) => {
  const family = app.locals.people

  return response.json(family)
});

app.post('/api/v1/fam', (request, response) => {
  const newMember = response.body;
  console.log(newMember)
  // const id = app.locals.people.length + 1

  // if(newMember) {
  //   app.locals.people.push({ newMember, id })
  //   return response.status(201).json({ id, newMember })
  // }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
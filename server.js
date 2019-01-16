const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.people = [
  {name: 'dennis', age: 28},
  {name: 'zack', age: 17},
  {name: 'selma', age: 49},
  {name: 'mikaela', age: 19}
]

app.get('/', (request, response) => {
  response.send('Oh hey Pet Box');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
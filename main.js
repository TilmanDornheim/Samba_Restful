
// dependencies
const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const url = require('url')

//Response
app.get('/', (request, response) => response.send('Hello World'));

app.use('/api', router);

//Port
app.listen(port, () => console.log(`Listening on Port ${port}`));


router.get('/', (request,response) => {

  response.json({message: 'Welcome to the Samba api'});

});

router.get('/test', (request, response) => {

  var urlParts = url.parse(request.url, true);

  var parameters = urlParts.query;

  var myParam = parameters.myParam;

  var myResponse = `The parameter I received was ${myParam}`

  response.json({message: myResponse});


});

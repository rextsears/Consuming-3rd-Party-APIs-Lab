var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cats/fact', async function(req, res) {
  try {
    const response = await axios.get('https://catfact.ninja/fact', {
      params: {
        max_length: 100
      }
    });

    const catFact = response.data.fact;

    if (!catFact) {
      res.status(404).send('Cat fact not found');
      return;
    }

    res.render('cats/fact', { catFact });
  } catch (error) {
    console.error('Error fetching cat fact:', error);
    res.status(500).send('Error fetching cat fact');
  }
});

module.exports = router;
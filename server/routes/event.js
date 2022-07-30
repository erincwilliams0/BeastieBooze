const { Router } = require('express');
const { createEvent, getEvents } = require('../database/Models.js');

const eventRouter = Router();

eventRouter.get('/', (req, res) => {
  getEvents()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

eventRouter.post('/', (req, res) => {
  const event = req.body;
  createEvent(event)
    .then(() => {
      console.log('SAVED TO DB');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('ERROR', err);
      res.sendStatus(500);
    });
});

module.exports = { eventRouter };

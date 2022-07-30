const { Router } = require('express');

const eventRouter = Router();

eventRouter.get('/events', (req, res) => {
  getEvents()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = { eventRouter };

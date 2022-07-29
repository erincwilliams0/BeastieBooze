const { Router } = require('express');

const eventRouter = Router();

eventRouter.get('/events', (req, res) => {
  Event.findOne()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.sendStatus(500));
});

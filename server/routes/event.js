const { Router } = require('express');

const eventRouter = Router();

eventRouter.get('/event', (req, res) => {
  Events.findOne({ _id: req.query.id })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.sendStatus(500));
});

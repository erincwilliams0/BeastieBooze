const { Router } = require("express");

const eventRouter = Router();

app.get("/api/event", (req, res) => {
      .then((data) => res.status(200).send(data))
      .catch((err) => res.sendStatus(500));
  })
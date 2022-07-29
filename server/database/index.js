const mongoose = require('mongoose');
// const { DB_USERNAME, DB_PASSWORD } = process.env;
const DATABASE = process.env.DB_NAME || 'BeastieBooze';
const mongoUri = `${process.env.ATLAS_URL}/${DATABASE}`;
// console.log({ DB_USERNAME, DB_PASSWORD });

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

module.exports = {
  db,
  Models: require('./Models.js'),
};

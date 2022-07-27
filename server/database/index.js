const mongoose = require('mongoose');
<<<<<<< HEAD
// const { DB_USERNAME, DB_PASSWORD } = process.env;
const DATABASE = process.env.DB_NAME || 'BeastieBooze';
const mongoUri = `${process.env.ATLAS_URL}/${DATABASE}`;
// console.log({ DB_USERNAME, DB_PASSWORD });
=======
const { DB_USERNAME, DB_PASSWORD } = process.env;
const mongoUri = process.env.ATLAS_URL;
console.log({ DB_USERNAME, DB_PASSWORD });
>>>>>>> 73019076c25b4319028a4cd15562a3c6dc5e0a32

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

module.exports = {
  db,
  Models: require('./Models.js'),
};

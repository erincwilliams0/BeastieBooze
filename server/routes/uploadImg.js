const { Router } = require("express");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

const { uploadFile } = require('/s3');

const uploadImgRouter = Router();

// uploadImgRouter.get('/images', (req, res) => {
  
// })

uploadImgRouter.post('/images', (req, res) => {
  console.log(req.body);
  // const file = req.file;
  // const { description } = req.body;

  // // console.log(file);
  // // console.log(description);

  // uploadFile(file)
  //   .then((data) => {
  //     console.log(data);
  //     // res.send('👌').status(200);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     // res.sendStatus(500);
  //   })
});

// upload.single('image'), 
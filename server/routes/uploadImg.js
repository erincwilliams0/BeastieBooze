const { Router } = require("express");
const multer = require('multer');
const { uploadFile, deleteFile, getObjectSignedUrl } = require('../s3.js');

const uploadImgRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');

// uploadImgRouter.get('/', (req, res) => {
  
// })

uploadImgRouter.post('/', upload.single('image'), (req, res) => {
  const { file } = req;
  const { caption } = req.body;

  uploadFile(file.buffer, file.originalname, file.mimetype)
    .then(() => {
      
    });
});

// upload.single('image'), 

module.exports = { uploadImgRouter };
var express = require('express');
var router = express.Router();

var multer = require('multer')


// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(213412412342,file)
    cb(null, './public/uploadFront')
  },
  filename: function (req, file, cb) {
    //cb(null, file.fieldname + '-' + Date.now())
    cb(null, 'midi.mid')

  }
})

var upload = multer({ storage: storage })


/* GET home page. */
router.get('/', function(req, res, next) {
   //res.render('index', { title: 'Express' });
   res.sendFile(__dirname + '/index.html');

});


router.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  console.log('adfadsf')
  const file = req.file
  console.log(file,23)
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
  
})


module.exports = router;

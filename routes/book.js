const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')
const router = express.Router();

const bookCtrl = require('../controllers/book');

router.post('/', auth, multer, bookCtrl.createBook);
router.put('/:id', auth, multer, bookCtrl.modifyBook);
router.delete('/:id', auth, bookCtrl.deleteBook);
router.get('/:id', auth, bookCtrl.findOneBook);
router.get('/', auth, bookCtrl.findAllBook);

module.exports = router;
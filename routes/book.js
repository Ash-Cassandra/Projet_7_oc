const express = require('express');
const auth = require.Router();
const router = express.Router();

const bookCtrl = require('../controllers/book');

router.post('/', auth, bookCtrl.createBook);
router.put('/:id', auth,  bookCtrl.modifyBook);
router.delete('/:id', auth, bookCtrl.deleteBook);
router.get('/:id', auth, bookCtrl.findOneBook);
router.get('/', auth, bookCtrl.findAllBook);

module.exports = router;
const { Router } = require("express");
const notesController = require('../controllers/notes');
const router = Router();
router.post('/', notesController.create);
router.get('/', notesController.getAll);
router.put('/:id', notesController.update);
router.delete('/:id', notesController.remove);
module.exports = router;
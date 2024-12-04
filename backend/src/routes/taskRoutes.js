const {Router} = require('express');
const{getTasks, createTask, retriveTask, updateTask, deleteTask} = require('../controlers/taskControler');
const router = Router();

// CRUD operations
router.get('/', getTasks);
router.post('/', createTask);
router.get('/:id', retriveTask);
router.post('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;

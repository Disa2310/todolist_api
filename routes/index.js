var express = require('express');
var router = express.Router();
var todolist = require ('../controller/todolist-controller');
/* GET home page. */
router.post('/insert', todolist.insert);
router.get('/select', todolist.get_data);
router.get('/delete/:id', todolist.delete_data);
router.post('/update/:id', todolist.update_data);


module.exports = router;
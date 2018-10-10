var express = require('express');
var router = express.Router();
var comment = require('./comment.controller');

router.get('/:commentId', comment.getComment);
router.post('/', comment.createComment);
router.put('/:commentId', comment.updateComment);
router.delete('/:commentId', comment.deleteComment);

module.exports = router;

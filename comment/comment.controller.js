const Comment = require('./comment.model')

exports.createComment = function (req, res, next) {
    // let body = req.body;
    // const newComment = new Comment(body);
    // newComment.save((err, comment) => {
    //   if (err)
    //     next(err);
    //   res.status(201).json(comment);
    // });
    const comment = new Comment();
    // body parser lets us use the req.body
    const { author, text } = req.body;
    if (!author || !text) {
      // we should throw an error. we can do this check on the front end
      return res.json({
        success: false,
        error: 'You must provide an author and comment'
      });
    }
    comment.author = author;
    comment.text = text;
    comment.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
};

exports.updateComment = function (req, res, next) {
    let body = req.body;
    let params = req.params;
    Comment.findByIdAndUpdate(params.commentId, body, {new: false}, (err, comment) => {
        if (err)
            next(err);
        res.status(200).json(comment);
    });
};

exports.getComment = function (req, res, next) {
    //let body = req.body;
    //let params = req.params;

    // Comment.findById(params.commentId, (err, comment) => {
    //     if (err)
    //         next(err);
    //     res.status(200).json(comment);
    // });
    Comment.find((err, comments) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: comments });
    });
};

exports.deleteComment = function(req, res, next) {
    Comment.findByIdAndDelete(params.userId, (err, comment) => {
    if (err)
        next(err);
    res.status(200).json({message: "comment deleted."});
    });
};

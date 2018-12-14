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
        error: 'You must provide an author and comment'
      });
    }
    comment.author = author;
    comment.text = text;
    comment.save(err => {
      if (err) return res.json({ success: false, err });
      return res.json({ success: true });
    });
};

exports.updateComment = function (req, res, next) {
    //let body = req.body;
    //let params = req.params;
    //Comment.findByIdAndUpdate(params.commentId, body, {new: false}, (err, comment) => {
       // if (err)
       //    next(err);
       // res.status(200).json(comment);
    //});
    const { commentId } = req.params;
    if (!commentId) {
        return res.json({ success: false, error: 'No comment id provided' });
    }
    Comment.findById(commentId, (error, comment) => {
        if (error) return res.json({ success: false, error });
        const { author, text } = req.body;
        if (author) comment.author = author;
        if (text) comment.text = text;
        comment.save(error => {
        if (error) return res.json({ success: false, error });
        return res.json({ success: true });
        });
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
      if (err) return res.json({ success: false, err});
      return res.json({ success: true, data: comments });
    });
};

exports.deleteComment = function(req, res, next) {
    //Comment.findByIdAndDelete(params.userId, (err, comment) => {
    //if (err)
    //    next(err);
    //res.status(200).json({message: "comment deleted."});
    //});
    const { commentId } = req.params;
    if (!commentId) {
      return res.json({ success: false, error: 'No comment id provided' });
    }
    Comment.remove({ _id: commentId }, (error, comment) => {
      if (error) return res.json({ success: false, error });
      return res.json({ success: true });
    });
};
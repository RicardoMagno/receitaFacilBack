const User = require('./user.model')
const Recipe = require('../recipe/recipe.model')
const Comment = require('../comment/comment.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.findAll = (req, res) => {
    User
        .find({})
        .then((data) => {
            res.send(data);
        })
        .catch(err => res.send(err));
}


exports.createUser = function (req, res, next) {
    let body = req.body;
    const newUser = new User(body);
    newUser.save((err, user) => {
      if (err)
        next(err);
      res.status(201).json(user);
    });
    //let user = new User({
        //name: req.body.name,
        //email: req.body.email
//        password: req.body.password
//     });

//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(user.password, salt, (err, hash) => {
//             if (err) throw err;
//             user.password = hash;
//             user.save()
//                 .then( user => res.status(201).json(user))
//                 .catch( err => res.status(400).json( err.code==11000 ? {message: "Email já está sendo utilizado"} : err) )
//         })
// })
//    })
};

exports.updateUser = function (req, res, next) {
    let body = req.body;
    let params = req.params;
    User.findByIdAndUpdate(params.userId, body, {new: false}, (err, user) => {
        if (err)
            next(err);
        res.status(200).json(user);
    });
};

exports.getUser = function (req, res, next) {
    let body = req.body;
    let params = req.params;

    User.findById(params.userId, (err, user) => {
        if (err)
            next(err);
        res.status(200).json(user);
    });
};

exports.deleteUser = function(req, res, next) {
    let params = req.params;
    Recipe.deleteMany({userId: params.userId}, (err, reports => {
        if (err)
            next(err);
        reports.forEach(report => {
            Comment.deleteMany({reportId: report.id}, (err, comments) => {
                if(err)
                    next(err);
                });
            });
        User.findByIdAndDelete(params.userId, (err, user) => {
            if (err)
                next(err);
            res.status(200).json({message: "user deleted."});
        });
    }));
};

exports.login = function(req, res, next) {
    let body = req.body;
    User.findOne({email: body.email, password: body.password}, (err, user) => {
        if (err)
            next(err);
        res.status(200).json(user);
    });
    // const email = req.body.email;
    // const pass  = req.body.password;

    // User.findOne({email})
    //     .then( user => {
    //         console.log(user)
    //         if (!user) return res.status(404).json({"message": "Usuário não encontrado"})

    //         bcrypt.compare(pass, user.password)
    //             .then(isValid => {
    //                 if (isValid) {
    //                     const payload = { id: user._id , name: user.name, avatar: user.avatar } // Create JWT Payload
    //                     const secOrKey = process.env.SECRET_OR_KEY || 'dumb';
    //                     jwt.sign(
    //                         payload, 
    //                         secOrKey, 
    //                         {expiresIn : 3600}, 
    //                         (err, token) => {
    //                             if (err) throw err;
    //                             res.json({ token: 'Bearer ' + token })
    //                         } 
    //                     );
    //                 } else {
    //                     return res.status(400).json({"message": "Password inválido"});
    //                 }
    //             })
    //     })
};


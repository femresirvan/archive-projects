const router = require('express').Router();
const User = require('../models/user');

router.post("/api/exercise/new-user", (req, res) => {
    let username = req.body.username;
    User.findOne({
        username: username
    }, (err, data) => {
        if (err) {
            return console.error(err);
        } else {
            if (data !== null) {
                res.status(409).json("Username already taken");
            } else {
                let newUser = new User({
                    username: username,
                    exercise: []
                });
                newUser.save((err, updatedUser) => {
                    if (err) {
                        return console.error(err);
                    } else {
                        res.json({
                            "username": username,
                            "_id": newUser._id
                        });
                    }
                });
            }
        }
    });
});

router.post("/api/exercise/add", (req, res) => {
    let userid = req.body.userId;
    let descript = req.body.description;
    let time = Number(req.body.duration);
    let date;
    if (req.body.date !== '') {
        date = new Date(req.body.date);
    } else {
        date = new Date(Date.now());
    }

    if (descript == '' || time == '' || userid == '') {
        res.status(400).json({
            "error": "invalid fields"
        });
    } else {
        User.findOne({
            _id: userid
        }, (err, data) => {
            if (err) {
                return console.error(err);
            } else if (data !== null) {
                let myWorkout = {
                    username: data.username,
                    description: descript,
                    duration: time,
                    //_id: userid,
                    date: date.toDateString()
                }
                data.workouts = data.workouts.concat(myWorkout);
                data.workouts = data.workouts.sort((a, b) => a.date - b.date);
                data.save((err) => {
                    if (err) return console.error(err)
                });
                res.json({
                    username: myWorkout.username,
                    description: myWorkout.description,
                    duration: myWorkout.duration,
                    _id: data._id,
                    date: myWorkout.date
                });
            } else {
                res.json({
                    "error": "create valid user first"
                });
            }
        });
    }
});

router.get("/api/exercise/users", (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            return console.error(err);
        } else if (data !== null) {
            let tempUsers = new Array();
            data.forEach((item, index, array) => {
                tempUsers[index] = {
                    username: String,
                    _id: String
                }
                tempUsers[index].username = item.username;
                tempUsers[index]._id = item.id;
            })
            res.json(tempUsers);
        } else {
            res.json({
                "error": "no known users"
            });
        }
    });
});

router.get("/api/exercise/log", (req, res) => {
    let userid = req.query.userId;
    let from = new Date(req.query.from);
    let to = new Date(req.query.to);
    let limit = Number(req.query.limit);

    User.findOne({
        _id: userid
    }, (err, data) => {
        if (err) {
            return console.error(err);
        } else if (data !== null) {
            let arr = data.workouts;

            if (!isNaN(to.getTime()) && !isNaN(from.getTime())) {
                arr = arr.filter((item) => ((item.date <= to) && (item.date >= from)));
            }

            if (!isNaN(limit)) {
                arr = arr.slice(0, limit);
            }

            let count = arr.length;

            res.send({
                "log": arr,
                count: count
            });

        } else {
            res.json({
                "error": "cannot retrieve workout"
            });
        }
    })
});

// Not found middleware
// router.use((req, res, next) => {
//     return next({
//         status: 404,
//         message: 'not found'
//     });
// })

// Error Handling middleware
router.use((err, req, res, next) => {
    let errorCode, errorMessage;

    if (err.errors) {
        // mongoose validation error
        errorCode = 400; // bad request
        const keys = Object.keys(err.errors);
        // report the first validation error
        errorMessage = err.errors[keys[0]].message;
    } else {
        // generic or custom error
        errorCode = err.status || 500;
        errorMessage = err.message || 'Internal Server Error';
    }
    res.status(errorCode).type('txt')
        .send(errorMessage);
});


module.exports = router;
//Workoutlar ve şemaları ayrı tuttum

const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    username: String,
    description: String,
    duration: Number,
    date: Date
}, {
    collection: 'exercises'
});

const Workout = mongoose.model("Workout", workoutSchema);

const userSchema = new mongoose.Schema({
    username: String,
    workouts: [{
        description: String,
        duration: Number,
        date: Date
    }]
}, {
    collection: 'users'
});

const User = mongoose.model("User", userSchema);
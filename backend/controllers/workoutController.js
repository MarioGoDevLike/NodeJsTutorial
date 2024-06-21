const WorkoutModel = require('../models/WorkoutModel')
const workoutModel = require('../models/WorkoutModel')

// get single workout
const getOneWorkout = async(req, res) =>{
    const {id} = req.params
    const workout = await WorkoutModel.findById(id)
    if(!workout){
        res.status(400).json({error: 'No such Workout '})
    }
    res.status(200).json(workout)
}

// get Workout
const getWorkout = async(req,res)=>{
    const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 }).lean();
    res.status(200).json(workouts)
}

// Create a workout
const createWorkout = async(req, res) =>{
    const {title, load, reps} = req.body
    try{
        const workout = await workoutModel.create({
            title,load,reps
        })
        res.status(200).json(workout.toObject())
        return
    }catch(error){
        res.status(400).json({error:error.message})
        return
    }
    res.json({mssg:'Post a new workout'})
}

module.exports = {
    createWorkout,
    getWorkout,
    getOneWorkout
}
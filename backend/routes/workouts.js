const express = require('express')
const { createWorkout, getWorkout, getOneWorkout } = require('../controllers/workoutController')

const router = express.Router()

// Get all workouts
router.get('/',getWorkout)

// Get a single workout
router.get('/:id', getOneWorkout)

// Post a workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', (req, res) =>{
    res.json({mssg:'Delete a workout'})
})

// Update a workout
router.patch('/:id', (req,res)=>{
    res.json({mssg:'Update a workout'})
})
module.exports = router 
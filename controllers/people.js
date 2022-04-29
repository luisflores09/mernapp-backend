const express = require('express');
const router = express.Router();
const People = require('../models/people');

// People Index Route
router.get('/', async (req, res) => {
    try {
        res.json(await People.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// People Create Route
router.post('/', async (req, res) => {
    try {
        // send all people
        res.json(await People.create(req.body));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// People Delete Route
router.delete('/:id', async (req, res) => {
    try {
        // send all people
        res.json(await People.findByIdAndDelete(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
})

// People Update Route
router.put('/:id', async (req, res) => {
    try {
        res.json(await People.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;
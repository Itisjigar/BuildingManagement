const express = require("express");
const router = express.Router();

const Climate = require("../../models/climate");

// @route   POST api/climate
// @desc    Create sensor data from dht sensor
// @access  Public
router.post("/", (req, res) => {
  const newClimate = new Climate({
    temperature: req.body.temperature,
    humidity: req.body.humidity,
    date: req.body.date,
    room_id: req.body.room_id
  });
  newClimate.save().then(Climate => res.json(Climate));
});

// @route   GET api/dhtsensor/all
// @desc    Return all motion sensor data
// @access  Public
router.get("/all", (req, res) => {
  DhtSensor.find()
    .sort({ date: -1 })
    .then(climatedata => res.json(climatedata));
});

module.exports = router;
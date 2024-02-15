const express = require("express");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "Get all workouts" });
});

// GET a single workouts
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

// POST a new workouts
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new workout" });
});

// DELETE a workouts
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELTE a workout" });
});

// UPDATE a new workouts
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workouts" });
});

module.exports = router;

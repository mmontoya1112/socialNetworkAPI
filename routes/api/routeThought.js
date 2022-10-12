const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/controllerThought.js');

router.route('/').get(getThoughts).post(createThought);
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought)

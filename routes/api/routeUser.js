const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/controllerUser');

router.route('/').get(getUser).post(createUser);
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
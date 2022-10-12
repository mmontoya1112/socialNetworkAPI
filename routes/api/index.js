const router = require('express').Router();
const thoughtRoutes = require('./routeThought');
const usertRoutes = require('./routeUser');

router.use('/thoughts', thoughtRoutes);
router.use('/students', usertRoutes);

module.exports = router;
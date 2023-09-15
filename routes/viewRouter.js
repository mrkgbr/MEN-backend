const express = require('express');
const viewController = require('../controllers/viewControler');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', viewController.getOverview);
router.get('/tour/:slug', authController.protect, viewController.getTour);

router.route('/login').get(viewController.getLoginForm).post();

module.exports = router;

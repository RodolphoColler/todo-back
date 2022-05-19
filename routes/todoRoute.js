const express = require('express');

const router = express.Router();

const controllers = require('../controllers/index');

router.post('/', controllers.create);

router.get('/', controllers.getAll);

module.exports = router;

const { Router } = require('express');
const router = Router();
const { workController } = require('../controllers/work.controller');

router.get('/work', workController.getWork);
router.post('/work', workController.addWork);

module.exports = router;
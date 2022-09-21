const {Router} = require('express')
const router = Router()
const {muscle} = require('../controllers/muscles.controller')

router.get('/muscle', muscle.getMuscle)
router.post('/muscle', muscle.addMuscle)
router.path('/muscle/:id', muscle.updateMuscle)
router.delete('/muscle/:id', muscle.deleteMuscle)

module.exports = router
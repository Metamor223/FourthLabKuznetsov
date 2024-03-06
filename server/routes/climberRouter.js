const Router = require('express')
const router = new Router()
const ClimberController = require('../controllers/ClimberController')

router.post('/',ClimberController.create)
router.get('/',ClimberController.getAll)
router.delete('/:id',ClimberController.deleteOne)

module.exports = router
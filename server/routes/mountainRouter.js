const Router = require('express')
const router = new Router()
const MountainController = require('../controllers/MountainController')

router.post('/',MountainController.create)
router.get('/',MountainController.getAll)
router.delete('/',MountainController.deleteOne)

module.exports = router
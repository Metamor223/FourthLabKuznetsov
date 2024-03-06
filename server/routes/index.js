const Router = require('express')
const router = new Router()
const climberRouter = require('./climberRouter')
const MountainRouter = require('./mountainRouter')

router.use('/climbers', climberRouter)
router.use('/mountains', MountainRouter)

module.exports = router
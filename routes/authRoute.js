const router = require('express').Router

const {
    singupGetController,
    singupPostController,
    loginGetController,
    loginPostController,
    logoutController
} = require('../controllers/authController')

router.get('/singup', singupGetController)
router.post('/post', singupPostController)

router.get('/login', loginGetController)
router.post('/login', loginPostController)

router.get('/logout', logoutController)

module.exports = router

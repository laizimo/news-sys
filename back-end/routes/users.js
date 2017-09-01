const router = require('koa-router')()
const userController = require('../controllers/user');

router.prefix('/users')

router.get('/', async (ctx, next) => {
  await ctx.render('user');
})

router.get('/register', async (ctx, next) => {
  await ctx.render('register');
})

router.post('/login', userController.signIn);
router.post('/register', userController.signUp);

module.exports = router

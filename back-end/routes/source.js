const router = require('koa-router')();
const sourceController = require('../controllers/source.js');

router.prefix('/source');

router.get('/', sourceController.getSource);
router.get('/type/:type', sourceController.getType);
router.get('/search', sourceController.getSearchData);

router.post('/insert', sourceController.insert);


module.exports = router;
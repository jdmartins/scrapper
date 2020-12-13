import Router from 'koa-router';
import AdminController from './controllers/admin.controller';
import IndexController from './controllers/index.controller';
import multer from '@koa/multer';

const router = new Router();
const upload = multer();

router.get('/', IndexController.getIndex);
router.get('/admin', AdminController.getIndex);
router.post('/target', AdminController.addTarget);
router.post('/keyword', AdminController.addKeyword);
router.post('/keywords', upload.single('keywords'), AdminController.addKeywords);

export default router;
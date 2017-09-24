const Controller = require('../controller/controller.js');
const Router = require('koa-router');

const childRouter = new Router();

childRouter.get('/getAllBlogs',  Controller.getAllBlogs);
childRouter.get('/getDescribeByCate', Controller.getDescribeByCate);
childRouter.get('/getBlogsByCate', Controller.getBlogsByCate);
childRouter.get('/getWebConfig', Controller.getWebConfig);
childRouter.post('/addScanNumber', Controller.addScanNumber);

module.exports = childRouter;
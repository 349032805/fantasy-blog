const Koa = require('koa');
const bodyParser = require('koa-bodyparser'); //bodyparser:该中间件用于post请求的数据
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

//引入子路由
const allRouter = require('./server/routes/routes.js');

//------------------------------------middleware---------------------------------
app.use(bodyParser());
//-------------------------------------middleware--------------------------------

//装载子路由
router.use('/blog', allRouter.routes(), allRouter.allowedMethods());

//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('The server is running at http://localhost:' + 3000);
});

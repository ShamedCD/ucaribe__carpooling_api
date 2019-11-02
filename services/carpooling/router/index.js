const Router = require('koa-router');

// Se añaden los routers por prefijo
const router = new Router();

// router.use(program.routes(), program.allowedMethods());

// End points no agrupables
router.all('/', (ctx, next) => {
    ctx.body = {
        error: 0,
        flash: '¡Bienvenido a la API de Carpooling Ucaribe!',
        data: null,
    };
    next();
});

module.exports = router;
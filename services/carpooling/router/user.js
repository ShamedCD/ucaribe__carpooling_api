const Router = require('koa-router');
const koaBody = require('koa-body');
const logger = require('winston');
const { basePath } = global;
const { TypeOrmSqlClient: db } = require(`${basePath}/config/client`);

const { CreateUser, CreateUserCommand } = require(`${basePath}/src/carpooling/register/application`);
const { UserRepository } = require(`${basePath}/src/carpooling/register/infrastructure/repositories/typeorm`);

function getJoiFlash(error) {
  let msg = '';

  error.details.forEach((element) => {
    msg += ` ${element.message}`;
  });

  return msg;
}

function makeErrorResponse(err) {
  logger.error(err.message + err.stack);
  const flash = err.isJoi ? getJoiFlash(err) : err.message;

  return {
    error: err.code,
    flash,
    data: {},
  };
}

const router = new Router({
  prefix: '/users'
});

router.post('/', koaBody(), async function (ctx, next) {
  let response;

  const data = {
    ...ctx.request.body,
    ...ctx.params,
    ...ctx.query,
  };

  try {
    const service = new CreateUser(
        new UserRepository(db)
    );
    const user = await service.process(
        new CreateUserCommand(data)
    );

    code = 201;
    response = {
      error: 0,
      flash: 'Successful!',
      data: {
        id: user.id || null,
      },
    };
    code = user ? 201 : 400;
  } catch (err) {
    code = 404;
    response = makeErrorResponse(err);
  } finally {
    ctx.status = code;
    ctx.body = response;
    next();
  }
});

module.exports = router;
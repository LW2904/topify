require('dotenv').config();

const app = new (require('koa'))();

app.use(async (ctx, next) => {
  if (ctx.request.url.includes('/topify')) {
    ctx.redirect(ctx.request.url.replace('/topify', ''));
  } else await next();
});

app.use(require('koa-static')('public'));

const server = app.listen(process.env.PORT || '8080');
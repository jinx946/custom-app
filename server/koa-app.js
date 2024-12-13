const Koa = require("koa");
const app = new Koa({ proxy: true });

function handleRequest(request, ctx) {
  console.log("request: ", request);
}

function handleResponse(response, ctx) {
  console.log("response: ", response);
  console.log(ctx.url);
  if (ctx.url === "/123") {
    ctx.throw(200, "错误");
    return;
  }

  response.body = "你好";
  // response.status = 304;
  // ctx.redirect('http://www.baidu.com');
}

app.use(async (ctx) => {
  const response = ctx.response;
  const request = ctx.request;
  handleRequest(request, ctx);
  handleResponse(response, ctx);
});
app.on("error", (err, ctx) => {
  console.log("err: ", err);
  // log.error('server error', err, ctx)
});
app.listen(3000);

//ctx.throw 错误码 错误信息  抛出错误
// ctx.request    ctx.response; ctx.app

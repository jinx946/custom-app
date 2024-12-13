## Request 别名

### 以下访问器和 Request 别名等效：

    ctx.header 请求头对象
    ctx.headers
    ctx.method
    ctx.method=
    ctx.url
    ctx.url=
    ctx.originalUrl
    ctx.origin
    ctx.href
    ctx.path
    ctx.path=
    ctx.query
    ctx.query=
    ctx.querystring
    ctx.querystring=
    ctx.host
    ctx.hostname
    ctx.fresh
    ctx.stale
    ctx.socket
    ctx.protocol
    ctx.secure
    ctx.ip
    ctx.ips
    ctx.subdomains
    ctx.is()
    ctx.accepts()
    ctx.acceptsEncodings()
    ctx.acceptsCharsets()
    ctx.acceptsLanguages()
    ctx.get()

## Response 别名

### 以下访问器和 Response 别名等效：

    ctx.body

#### ctx.body=

    将响应体设置为以下之一：
    string 写入
    Buffer 写入
    Stream 管道
    Object || Array JSON-字符串化
    null 无内容响应

####

    ctx.status
    ctx.status=
    ctx.message
    ctx.message=
    ctx.length=
    ctx.length
    ctx.type=
    ctx.type  获取请求 Content-Type
    ctx.headerSent
    ctx.redirect() 重定向
    ctx.attachment()
    ctx.set()
    ctx.append()
    ctx.remove()
    ctx.lastModified=
    ctx.etag=

    response.flushHeaders();刷新请求头，然后刷新body

总结: koa 比 express 更轻量，中间流程自个设置

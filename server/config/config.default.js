exports.mysql = {
  // 单数据库配置信息
  client: {
    // 数据库类型
    type: 'mysql',
    // 主机地址
    host: 'localhost',
    // 端口号
    port: '3306',
    // 用户名
    user: 'user',
    // 密码
    password: '123456',
    // 数据库名
    database: 'appsql',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};

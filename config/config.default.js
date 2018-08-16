'use strict';

module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533608084332_4168'

  // add your config here
  config.middleware = []

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'niit_qna',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }
  
  config.passportGithub = {
    key: '0472314832bf5dcaafd1',
    secret: '62a45ac8dfd7ddf99e96b390905748210a250e8d'
  }

  config.security = {
    domainWhiteList: ['http://localhost:8080'],
    csrf: {
      enable: false
    }
  }
  config.cors = {
    credentials: true
  }

  return config
}

const Cluster = require('yjy-koa-core/core/cluster/index')
Cluster.startCluster({
  appPath: __dirname
})
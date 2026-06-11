const { onRequest } = require('firebase-functions/v2/https');
  const server = import('firebase-frameworks');
  exports.ssrsusaweb94182 = onRequest({"region":"asia-south1","maxInstances":20,"concurrency":80}, (req, res) => server.then(it => it.handle(req, res)));
  
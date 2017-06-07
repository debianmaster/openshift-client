const KubernetesClient = require('kubernetes-client');

Object.assign(module.exports, KubernetesClient);
module.exports.OApi = require('./oapi');

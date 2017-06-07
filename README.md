> This openshift-client library is based on godaddy/kubernetes-client library, created by https://github.com/silasbw  I will be maintaing it.   Let me know if any objects are missing.

## Using

```js
const OpenShiftClient = require('openshift-client');

// Get Deployments
const oapi = new OpenShiftClient.OApi(OpenShiftClient.config.fromKubeconfig());
oapi.ns('foo').deploymentconfigs('bar').get((err, result) => {
  if (err) throw err;
  console.log(JSON.stringify(result, null, 2));
});

// Watch Deployments
const streamDC = oapi.deploymentconfigs.get({ qs: { watch: true } });
const JSONStream = require('json-stream');
const jsonStreamDC = new JSONStream();
streamDC.pipe(jsonStreamDC);
jsonStreamDC.on('data', object => {
   console.log('DC:', JSON.stringify(object, null, 2));
});
```

> For more examples refer https://github.com/godaddy/kubernetes-client  

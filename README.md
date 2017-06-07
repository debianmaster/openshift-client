

## Using

```js
const OpenShiftClient = require('openshift-client');

const oapi = new OpenShiftClient.OApi(OpenShiftClient.config.fromKubeconfig());
oapi.ns('foo').deploymentconfigs('bar').get((err, result) => {
  if (err) throw err;
  console.log(JSON.stringify(result, null, 2));
});
```


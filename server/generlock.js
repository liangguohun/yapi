  const fs = require('fs-extra');
  const yapi = require('./yapi.js');
  fs.ensureFileSync(yapi.path.join(yapi.WEBROOT_RUNTIME, 'init.lock'));
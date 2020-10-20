"use strict";

const {fork} = require('child_process');
const assert = require("assert");

const proc = fork(require.resolve('./src/foo-fork'), {stdio: 'inherit'});

proc.on('message', value => {
  console.error('received "%s" from subprocess', value);
  assert.strictEqual('polo', value);

  proc.kill();
}).on('exit', () => {
  console.error('subprocess exited; done')
});

proc.send('marco');



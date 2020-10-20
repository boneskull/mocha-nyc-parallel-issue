"use strict";

const workerpool = require("workerpool");
const assert = require("assert");

(async function() {

  const pool = workerpool.pool(require.resolve("./src/foo-workerpool"), {workerType:'process'});

  const result = await pool.exec("foo");

  assert.strictEqual(result, "foo");

  console.error('done');

  return pool.terminate();
})();

"use strict";

const workerpool = require("workerpool");
const assert = require("assert");

describe("foo", function () {
  it("should run foo", async function () {
    const pool = workerpool.pool(require.resolve("../src/foo"));

    const result = await pool.exec("foo");

    assert.strictEqual(result, "foo");

    return pool.terminate();
  });
});

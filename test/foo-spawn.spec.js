"use strict";

const { spawn } = require("child_process");
const assert = require("assert");

const proc = spawn(process.execPath, [require.resolve("../src/foo-spawn")]);

let data = "";
proc.stdout.on("data", (value) => {
  data += value;
});

proc.on("exit", () => {
  console.error("subprocess exited");

  assert.strictEqual(data.trim(), "foo");
});

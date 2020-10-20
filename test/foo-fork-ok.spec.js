"use strict";

const { fork } = require("child_process");
const assert = require("assert");

const proc = fork(require.resolve("../src/foo-fork-ok"), { stdio: "inherit" });

proc
  .on("message", (value) => {
    console.error('received "%s" from subprocess', value);
    assert.strictEqual("polo", value);
  })
  .on("exit", () => {
    console.error("subprocess exited; done");
  });

proc.send("marco");

This repo shows a problem with `nyc` collecting coverage data from forked processes on Windows.

1. Run `npm install`
1. Run `npm test`, which will execute (with `nyc`):
   1. `test/foo-fork.spec.js`; should return no coverage on Windows/PowerShell
   1. `test/foo-workerpool.spec.js`; should return no coverage on Windows/PowerShell
   1. `test/foo-spawn.spec.js`; should return coverage
   1. `test/foo-fork-ok.spec.js`; should return coverage

`src/foo-fork-ok.js` shows the child process terminates itself.

I think we can conclude: on Windows, a subprocess opened via `child_process.fork()` _must terminate itself_ in order to gather coverage. Upon signal (e.g., `SIGINT`), a child process cannot execute any "cleanup" code; it cannot, e.g.:

```js
process.on("SIGINT", () => {
  process.exit();
});
```

What should happen is that `workerpool` does not send a signal to a child process to terminate it; instead it will send a special message, and the child process will then terminate itself.

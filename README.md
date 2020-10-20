This repo shows a problem with `nyc` collecting coverage data from forked processes on Windows.

1. Run `npm install`
1. Run `npm test`, which will execute (with `nyc`):
   1. `test/foo-fork.spec.js`; should return no coverage on Windows/PowerShell
   1. `test/foo-workerpool.spec.js`; should return no coverage on Windows/PowerShell
   1. `test/foo-spawn.spec.js`; should return coverage

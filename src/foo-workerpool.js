const workerpool = require("workerpool");

workerpool.worker({
  foo() {
    console.error('returning "foo"')
    return "foo";
  },
});

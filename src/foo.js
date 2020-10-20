const workerpool = require("workerpool");

workerpool.worker({
  foo() {
    return "foo";
  },
});

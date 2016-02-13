// in baz.js
define(["./foo", "exports"], function (foo, baz) {
  baz.setBazOnFoo = function () { foo.baz = "goodbye"; };
});

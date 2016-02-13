// In bar.js
define(["./foo", "exports"], function (foo, bar) {
  bar.setBarOnFoo = function () { foo.bar = "hello"; };
});

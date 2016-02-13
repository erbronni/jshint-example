/* globals console */
// to depend on a bower installed component:
// define(['bower_components/componentName/file'])
define([
  "jquery",
  "foo",
  "bar",
  "baz"
], function ($, foo, bar, baz) {
  // The unused '_' will produce an error in the above statement.
  $('body').append('jQuery ' + $.fn.jquery + ' loaded!');

  bar.setBarOnFoo();
  baz.setBazOnFoo();

  console.log(foo.bar);
  console.log(foo.baz);

});

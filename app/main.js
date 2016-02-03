// to depend on a bower installed component:
// define(['bower_components/componentName/file'])
define([
  "jquery",
  "lodash"
], function ($, _) {
  // The unused '_' will produce an error in the above statement.
  $('body').append('jQuery ' + $.fn.jquery + ' loaded!');
});

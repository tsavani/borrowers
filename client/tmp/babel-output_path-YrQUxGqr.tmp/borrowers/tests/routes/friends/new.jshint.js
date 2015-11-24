define('borrowers/tests/routes/friends/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/friends');
  QUnit.test('routes/friends/new.js should pass jshint', function (assert) {
    assert.ok(false, 'routes/friends/new.js should pass jshint.\nroutes/friends/new.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/friends/new.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors');
  });
});
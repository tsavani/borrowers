QUnit.module('JSHint - routes/friends');
QUnit.test('routes/friends/index.js should pass jshint', function(assert) { 
  assert.ok(false, 'routes/friends/index.js should pass jshint.\nroutes/friends/index.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/friends/index.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});

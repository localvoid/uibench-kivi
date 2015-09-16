goog.provide('app.ui.main');
goog.require('app.ui.table');
goog.require('app.ui.anim');
goog.require('app.ui.tree');
goog.require('uibench.state');
goog.require('kivi');

/** @type {!kivi.CDescriptor<!uibench.state.AppState, null>} */
app.ui.main.d = new kivi.CDescriptor('Main');

/** @param {!kivi.Component<!uibench.state.AppState, null>} c */
app.ui.main.d.update = function(c) {
  var data = c.data;
  var location = data && data.location;

  var children = null;
  if (location === 'table') {
    children = [kivi.createComponent(app.ui.table.d, data.table)];
  } else if (location === 'anim') {
    children = [kivi.createComponent(app.ui.anim.d, data.anim)];
  } else if (location === 'tree') {
    children = [kivi.createComponent(app.ui.tree.d, data.tree)];
  }

  c.syncVRoot(kivi.createRoot().type('Main').children(children));
};

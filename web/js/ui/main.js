goog.provide('app.ui.main');
goog.require('app.ui.table');
goog.require('app.ui.anim');
goog.require('app.ui.tree');
goog.require('uibench.state');
goog.require('vdom');

/** @type {!vdom.CDescriptor<!uibench.state.AppState, null>} */
app.ui.main.d = new vdom.CDescriptor();

/** @param {!vdom.Component<!uibench.state.AppState, null>} c */
app.ui.main.d.update = function(c) {
  var data = c.data;

  var root = vdom.createRoot();
  root.type = 'Main';

  var location = data && data.location;

  if (location === 'table') {
    root.children = [vdom.createComponent(app.ui.table.d, data.table)];
  } else if (location === 'anim') {
    root.children = [vdom.createComponent(app.ui.anim.d, data.anim)];
  } else if (location === 'tree') {
    root.children = [vdom.createComponent(app.ui.tree.d, data.tree)];
  }

  c.updateRoot(root);
};

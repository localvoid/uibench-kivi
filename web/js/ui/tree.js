goog.provide('app.ui.tree');
goog.require('app.ui.tree_node');
goog.require('uibench.state');
goog.require('vdom');

/** @type {!vdom.CDescriptor<!uibench.state.TreeState, null>} */
app.ui.tree.d = new vdom.CDescriptor();

/** @param {!vdom.Component<!uibench.state.TreeState, null>} c */
app.ui.tree.d.update = function(c) {
  var data = c.data;
  var root = vdom.createRoot();
  root.type = 'Tree';
  root.children = [vdom.createComponent(app.ui.tree_node.d, data.root)];
  c.updateRoot(root);
};

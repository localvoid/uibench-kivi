goog.provide('app.ui.tree_leaf');
goog.require('uibench.state');
goog.require('vdom');

/** @type {!vdom.CDescriptor<!uibench.state.TreeNodeState, null>} */
app.ui.tree_leaf.d = new vdom.CDescriptor();
app.ui.tree_leaf.d.tag = 'li';

/** @param {!vdom.Component<!uibench.state.TreeNodeState, null>} c */
app.ui.tree_leaf.d.update = function(c) {
  var data = c.data;

  var root = vdom.createRoot();
  root.type = 'TreeLeaf';
  root.children = [vdom.createText(data.id.toString())];
  c.updateRoot(root);
};

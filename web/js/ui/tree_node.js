goog.provide('app.ui.tree_node');
goog.require('app.ui.tree_leaf');
goog.require('uibench.state');
goog.require('vdom');

/** @type {!vdom.CDescriptor<!uibench.state.TreeNodeState>} */
app.ui.tree_node.d = new vdom.CDescriptor();
app.ui.tree_node.d.tag = 'ul';

/** @param {!vdom.Component<!uibench.state.TreeNodeState>} c */
app.ui.tree_node.d.update = function(c) {
  var data = c.data;
  var children = [];

  for (var i = 0; i < data.children.length; i++) {
    var n = data.children[i];
    children.push(vdom.createIComponent(n.id, n.container ? app.ui.tree_node.d : app.ui.tree_leaf.d, n));
  }

  var root = vdom.createRoot();
  root.type = 'TreeNode';
  root.children = children;
  c.updateRoot(root);
};

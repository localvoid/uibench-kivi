goog.provide('app.ui.tree_node');
goog.require('app.ui.tree_leaf');
goog.require('uibench.state');
goog.require('kivi');

/** @type {!kivi.CDescriptor<!uibench.state.TreeNodeState>} */
app.ui.tree_node.d = new kivi.CDescriptor('TreeNode');
app.ui.tree_node.d.tag = 'ul';

/** @param {!kivi.Component<!uibench.state.TreeNodeState>} c */
app.ui.tree_node.d.update = function(c) {
  var data = c.data;

  var children = [];
  for (var i = 0; i < data.children.length; i++) {
    var n = data.children[i];
    children.push(kivi.createComponent(n.container ? app.ui.tree_node.d : app.ui.tree_leaf.d, n).key(n.id));
  }

  c.syncVRoot(kivi.createRoot().type('TreeNode').trackByKey().children(children));
};

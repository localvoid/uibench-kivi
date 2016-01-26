goog.provide('app.ui.tree_node');
goog.require('app.ui.tree_leaf');
goog.require('uibench.state');
goog.require('kivi.CDescriptor');
goog.require('kivi.CTag');
goog.require('kivi.VNode');

goog.scope(function() {
  var VNode = kivi.VNode;

  /** @type {!kivi.CDescriptor<!uibench.state.TreeNodeState>} */
  app.ui.tree_node.d = kivi.CDescriptor.create('TreeNode');
  app.ui.tree_node.d.tag = kivi.CTag.create('ul').classes('TreeNode');

  /** @param {!kivi.Component<!uibench.state.TreeNodeState>} c */
  app.ui.tree_node.d.update = function(c) {
    var data = c.data;

    var children = [];
    for (var i = 0; i < data.children.length; i++) {
      var n = data.children[i];
      children.push(VNode.createComponent(n.container ? app.ui.tree_node.d : app.ui.tree_leaf.d, n).key(n.id));
    }

    c.syncVRoot(VNode.createRoot().trackByKey().children(children));
  };
});

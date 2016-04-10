goog.provide('app.ui.tree_leaf');
goog.require('uibench.state');
goog.require('kivi.CDescriptor');
goog.require('kivi.CTag');
goog.require('kivi.VNode');

goog.scope(function() {
  var VNode = kivi.VNode;

  /** @type {!kivi.CDescriptor<!uibench.state.TreeNodeState, null>} */
  app.ui.tree_leaf.d = kivi.CDescriptor.create('TreeLeaf');
  app.ui.tree_leaf.d.enableRecycling(500);
  app.ui.tree_leaf.d.tag = kivi.CTag.create('li').enableCloning().classes('TreeLeaf');

  /** @param {!kivi.Component<!uibench.state.TreeNodeState, null>} c */
  app.ui.tree_leaf.d.update = function(c) {
    c.syncVRoot(VNode.createCRoot().children('' + c.data.id));
  };
});

goog.provide('app.ui.tree');
goog.require('app.ui.tree_node');
goog.require('uibench.state');
goog.require('kivi.CDescriptor');
goog.require('kivi.CTag');
goog.require('kivi.VNode');

goog.scope(function() {
  var VNode = kivi.VNode;

  /** @type {!kivi.CDescriptor<!uibench.state.TreeState, null>} */
  app.ui.tree.d = kivi.CDescriptor.create('Tree');
  app.ui.tree.d.tag = kivi.CTag.create('div').classes('Tree');

  /** @param {!kivi.Component<!uibench.state.TreeState, null>} c */
  app.ui.tree.d.update = function(c) {
    c.syncVRoot(VNode.createRoot().children([
      VNode.createComponent(app.ui.tree_node.d, c.data.root)
    ]));
  };
});

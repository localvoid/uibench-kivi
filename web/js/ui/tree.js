goog.provide('app.ui.tree');
goog.require('app.ui.tree_node');
goog.require('uibench.state');
goog.require('kivi');

/** @type {!kivi.CDescriptor<!uibench.state.TreeState, null>} */
app.ui.tree.d = new kivi.CDescriptor('Tree');

/** @param {!kivi.Component<!uibench.state.TreeState, null>} c */
app.ui.tree.d.update = function(c) {
  c.syncVRoot(kivi.createRoot().type('Tree').children([
    kivi.createComponent(app.ui.tree_node.d, c.data.root)
  ]));
};

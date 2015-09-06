goog.provide('app.ui.tree_leaf');
goog.require('uibench.state');
goog.require('kivi');

/** @type {!kivi.CDescriptor<!uibench.state.TreeNodeState, null>} */
app.ui.tree_leaf.d = new kivi.CDescriptor();
app.ui.tree_leaf.d.tag = 'li';

/** @param {!kivi.Component<!uibench.state.TreeNodeState, null>} c */
app.ui.tree_leaf.d.update = function(c) {
  c.syncVRoot(kivi.createRoot().type('TreeLeaf').children('' + c.data.id));
};

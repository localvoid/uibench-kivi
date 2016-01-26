goog.provide('app.ui.main');
goog.require('app.ui.table');
goog.require('app.ui.anim');
goog.require('app.ui.tree');
goog.require('uibench.state');
goog.require('kivi.CDescriptor');
goog.require('kivi.CTag');
goog.require('kivi.VNode');

goog.scope(function() {
  var VNode = kivi.VNode;

  /** @type {!kivi.CDescriptor<!uibench.state.AppState, null>} */
  app.ui.main.d = kivi.CDescriptor.create('Main');
  app.ui.main.d.tag = kivi.CTag.create('div').classes('Main');

  /** @param {!kivi.Component<!uibench.state.AppState, null>} c */
  app.ui.main.d.update = function(c) {
    var data = c.data;
    var location = data && data.location;

    var children = null;
    if (location === 'table') {
      children = [VNode.createComponent(app.ui.table.d, data.table)];
    } else if (location === 'anim') {
      children = [VNode.createComponent(app.ui.anim.d, data.anim)];
    } else if (location === 'tree') {
      children = [VNode.createComponent(app.ui.tree.d, data.tree)];
    }

    c.syncVRoot(VNode.createRoot().children(children));
  };
});

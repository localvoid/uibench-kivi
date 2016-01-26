goog.provide('app.ui.anim');
goog.require('app.ui.anim_box');
goog.require('uibench.state');
goog.require('kivi.CDescriptor');
goog.require('kivi.CTag');
goog.require('kivi.VNode');

goog.scope(function() {
  var VNode = kivi.VNode;

  /** @type {!kivi.CDescriptor<!uibench.state.AnimState, null>} */
  app.ui.anim.d = kivi.CDescriptor.create('Anim');
  app.ui.anim.d.tag = kivi.CTag.create('div').classes('Anim');

  /** @param {!kivi.Component<!uibench.state.AnimState, null>} c */
  app.ui.anim.d.update = function(c) {
    var items = c.data.items;

    var children = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      children.push(VNode.createComponent(app.ui.anim_box.d, item).key(item.id));
    }

    c.syncVRoot(VNode.createRoot().trackByKey().children(children));
  };

});

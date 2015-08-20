goog.provide('app.ui.anim');
goog.require('app.ui.anim_box');
goog.require('uibench.state');
goog.require('vdom');

/** @type {!vdom.CDescriptor<!uibench.state.AnimState, null>} */
app.ui.anim.d = new vdom.CDescriptor();

/** @param {!vdom.Component<!uibench.state.AnimState, null>} c */
app.ui.anim.d.update = function(c) {
  var items = c.data.items;

  var children = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    children.push(vdom.createComponent(app.ui.anim_box.d, item).key(item.id));
  }

  c.updateRoot(vdom.createRoot().type('Anim').children(children));
};

goog.provide('app.ui.anim_box');
goog.require('uibench.state');
goog.require('kivi.CDescriptor');
goog.require('kivi.CTag');
goog.require('kivi.VNode');

goog.scope(function() {
  var VNode = kivi.VNode;

  /** @type {!kivi.CDescriptor<!uibench.state.AnimBoxState, null>} */
  app.ui.anim_box.d = kivi.CDescriptor.create('AnimBox');
  app.ui.anim_box.d.tag = kivi.CTag.create('div').enableCloning().classes('AnimBox')
      .update(function(node, a, b) {
        var t = /** @type {number} */(b[1]);
        node = /** @type {!Element} */(node);
        if (a === void 0) {
          node.setAttribute('data-id', b[0]);
          node.style.cssText = 'border-radius:' + (t % 10) + 'px;' +
              'background:rgba(0,0,0,' + (0.5 + ((t % 10) / 10)) + ')';
        } else if (a[1] !== t) {
          node.style.cssText = 'border-radius:' + (t % 10) + 'px;' +
              'background:rgba(0,0,0,' + (0.5 + ((t % 10) / 10)) + ')';
        }
      });

  /** @param {!kivi.Component<!uibench.state.AnimBoxState, null>} c */
  app.ui.anim_box.d.update = function(c) {
    var data = c.data;
    c.syncVRoot(VNode.createRoot().updateProps([data.id, data.time]));
  };
});

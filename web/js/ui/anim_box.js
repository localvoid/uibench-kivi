goog.provide('app.ui.anim_box');
goog.require('uibench.state');
goog.require('kivi.CDescriptor');
goog.require('kivi.CTag');
goog.require('kivi.VNode');

goog.scope(function() {
  var VNode = kivi.VNode;

  /** @type {!kivi.CDescriptor<!uibench.state.AnimBoxState, null>} */
  app.ui.anim_box.d = kivi.CDescriptor.create('AnimBox');
  app.ui.anim_box.d.tag = kivi.CTag.create('div').classes('AnimBox');

  /** @param {!kivi.Component<!uibench.state.AnimBoxState, null>} c */
  app.ui.anim_box.d.update = function(c) {
    var data = c.data;
    var time = data.time;
    c.syncVRoot(VNode.createRoot().attrs({'data-id': data.id}).style(
      'border-radius:' + (time % 10).toString() + 'px;' +
      'background:rgba(0,0,0,' + (0.5 + ((time % 10) / 10)).toString() + ')'
    ));
  };
});

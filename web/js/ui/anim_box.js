goog.provide('app.ui.anim_box');
goog.require('uibench.state');
goog.require('vdom');

/** @type {!vdom.CDescriptor<!uibench.state.AnimBoxState, null>} */
app.ui.anim_box.d = new vdom.CDescriptor();

/** @param {!vdom.Component<!uibench.state.AnimBoxState, null>} c */
app.ui.anim_box.d.update = function(c) {
  var data = c.data;
  var time = data.time;
  var root = vdom.createRoot();
  root.type = 'AnimBox';
  root.attrs = {
    'data-id': data.id
  };
  root.style = {
    'border-radius': (time % 10).toString() + 'px',
    'background': 'rgba(0,0,0,' + (0.5 + ((time % 10) / 10)).toString() + ')'
  };
  c.updateRoot(root);
};
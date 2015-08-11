goog.provide('app.ui.table_cell');
goog.require('vdom');

/** @type {!vdom.CDescriptor<string, null>} */
app.ui.table_cell.d = new vdom.CDescriptor();
app.ui.table_cell.d.tag = 'td';

/** @param {!vdom.Component<string, null>} c */
app.ui.table_cell.d.init = function(c) {
  var self = this;
  c.element.onClick = function(e) {
    console.log('Click', self.data);
    e.stopPropagation();
  };
};

/** @param {!vdom.Component<string, null>} c */
app.ui.table_cell.d.update = function(c) {
  var root = vdom.createRoot();
  root.type = 'TableCell';
  root.children = [vdom.createText(c.data)];
  c.updateRoot(root);
};

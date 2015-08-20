goog.provide('app.ui.table_cell');
goog.require('vdom');

/** @type {!vdom.CDescriptor<string, null>} */
app.ui.table_cell.d = new vdom.CDescriptor();
app.ui.table_cell.d.tag = 'td';

/** @param {!vdom.Component<string, null>} c */
app.ui.table_cell.d.init = function(c) {
  c.element.onclick = function(e) {
    console.log('Click', c.data);
    e.stopPropagation();
  };
};

/** @param {!vdom.Component<string, null>} c */
app.ui.table_cell.d.update = function(c) {
  c.updateRoot(vdom.createRoot().type('TableCell').children(c.data));
};

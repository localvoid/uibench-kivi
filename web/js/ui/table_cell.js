goog.provide('app.ui.table_cell');
goog.require('kivi');

/** @type {!kivi.CDescriptor<string, null>} */
app.ui.table_cell.d = new kivi.CDescriptor();
app.ui.table_cell.d.tag = 'td';

/** @param {!kivi.Component<string, null>} c */
app.ui.table_cell.d.init = function(c) {
  c.element.onclick = function(e) {
    console.log('Click', c.data);
    e.stopPropagation();
  };
};

/** @param {!kivi.Component<string, null>} c */
app.ui.table_cell.d.update = function(c) {
  c.updateRoot(kivi.createRoot().type('TableCell').children(c.data));
};

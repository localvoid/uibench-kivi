goog.provide('app.ui.table_cell');
goog.require('kivi');

/** @type {!kivi.CDescriptor<string, null>} */
app.ui.table_cell.d = new kivi.CDescriptor('TableCell');
app.ui.table_cell.d.tag = 'td';

/** @param {!kivi.Component<string, null>} c */
app.ui.table_cell.d.init = function(c) {
  c.element.xtag = c;
  c.element.onclick = app.ui.table_cell._handleClick;
};

/** @param {Event} e */
app.ui.table_cell._handleClick = function(e) {
  var currentTarget = /** @type {{xtag:!kivi.Component<string, null>}} */(e.currentTarget);
  console.log('Click', currentTarget.xtag.data);
  e.stopPropagation();
};

/** @param {!kivi.Component<string, null>} c */
app.ui.table_cell.d.update = function(c) {
  c.syncVRoot(kivi.createRoot().type('TableCell').children(c.data));
};

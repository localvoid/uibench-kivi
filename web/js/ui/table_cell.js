goog.provide('app.ui.table_cell');
goog.require('kivi');

/** @type {!kivi.CDescriptor<string, null>} */
app.ui.table_cell.d = new kivi.CDescriptor();
app.ui.table_cell.d.tag = 'td';

/** @param {!kivi.Component<string, null>} c */
app.ui.table_cell.d.init = function(c) {
  c.element._xtag = c;
  c.element.onclick = app.ui.table_cell._handleClick;
};

/** @param {Event} e */
app.ui.table_cell._handleClick = function(e) {
  var currentTarget = /** @type {{_xtag:!kivi.Component<string, null>}} */(e.currentTarget);
  console.log('Click', currentTarget._xtag.data);
  e.stopPropagation();
};

/** @param {!kivi.Component<string, null>} c */
app.ui.table_cell.d.update = function(c) {
  c.updateRoot(kivi.createRoot().type('TableCell').children(c.data));
};

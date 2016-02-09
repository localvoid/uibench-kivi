goog.provide('app.ui.table_cell');
goog.require('kivi.CDescriptor');
goog.require('kivi.CTag');
goog.require('kivi.VNode');

goog.scope(function() {
  var VNode = kivi.VNode;

  /** @type {!kivi.CDescriptor<string, null>} */
  app.ui.table_cell.d = kivi.CDescriptor.create('TableCell');
  app.ui.table_cell.d.enableRecycling(400);
  app.ui.table_cell.d.tag = kivi.CTag.create('td').enableCloning().classes('TableCell');

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
    c.syncVRoot(VNode.createRoot().children(c.data));
  };
});

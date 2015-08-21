goog.provide('app.ui.table');
goog.require('app.ui.table_row');
goog.require('uibench.state');
goog.require('kivi');

/** @type {!kivi.CDescriptor<!uibench.state.TableState, null>} */
app.ui.table.d = new kivi.CDescriptor();
app.ui.table.d.tag = 'table';

/** @param {!kivi.Component<!uibench.state.TableState, null>} c */
app.ui.table.d.update = function(c) {
  var data = c.data;
  var items = data.items;

  var children = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    children.push(kivi.createComponent(app.ui.table_row.d, item).key(item.id));
  }

  c.updateRoot(kivi.createRoot().type('Table').children([
    kivi.createElement('tbody').children(children)
  ]));
};

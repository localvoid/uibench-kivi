goog.provide('app.ui.table');
goog.require('app.ui.table_row');
goog.require('uibench.state');
goog.require('vdom');

/** @type {!vdom.CDescriptor<!uibench.state.TableState, null>} */
app.ui.table.d = new vdom.CDescriptor();
app.ui.table.d.tag = 'table';

/** @param {!vdom.Component<!uibench.state.TableState, null>} c */
app.ui.table.d.update = function(c) {
  var data = c.data;
  var items = data.items;

  var children = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    children.push(vdom.createIComponent(item.id, app.ui.table_row.d, item));
  }

  var tbody = vdom.createElement('tbody');
  tbody.children = children;

  var root = vdom.createRoot();
  root.type = 'Table';
  root.children = [tbody];

  c.updateRoot(root);
};

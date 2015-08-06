goog.provide('app.ui.table');
goog.require('app.ui.table_row');
goog.require('uibench.state');
goog.require('vdom');

/** @type {!vdom.CDescriptor<!uibench.state.TableState, null>} */
app.ui.table.d = new vdom.CDescriptor();
app.ui.table.d.tag = 'table';

/** @param {!vdom.Component<!uibench.state.TableState, null>} c */
app.ui.table.d.update = function(c) {
  var i;
  var newItems;
  var data = c.data;

  var items = data.items;
  if (data.filter != null) {
    newItems = [];
    for (i = 0; i < items.length; i++) {
      if ((i % data.filter) === 0) {
        newItems.push(items[i]);
      }
    }
    items = newItems;
  }
  if (data.sort != null) {
    newItems = items.slice();
    newItems.sort(function(a, b) { return a.props[data.sort].localeCompare(b.props[data.sort]); });
    items = newItems;
  }

  var children = [];
  for (i = 0; i < items.length; i++) {
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

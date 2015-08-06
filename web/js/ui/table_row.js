goog.provide('app.ui.table_row');
goog.require('app.ui.table_cell');
goog.require('uibench.state');
goog.require('vdom');

/** @type {!vdom.CDescriptor<!uibench.state.TableItemState, null>} */
app.ui.table_row.d = new vdom.CDescriptor();
app.ui.table_row.d.tag = 'tr';

/** @param {!vdom.Component<!uibench.state.TableItemState, null>} c */
app.ui.table_row.d.update = function(c) {
  var data = c.data;
  var props = data.props;

  var children = [vdom.createComponent(app.ui.table_cell.d, '#' + data.id)];
  for (var i = 0; i < props.length; i++) {
    children.push(vdom.createComponent(app.ui.table_cell.d, props[i]));
  }

  var root = vdom.createRoot();
  root.type = 'TableRow';
  root.attrs = {
    'data-id': data.id
  };
  if (data.active) {
    root.classes = app.ui.table_row.ACTIVE_CLASSES;
  }
  root.children = children;
  c.updateRoot(root);
};

app.ui.table_row.ACTIVE_CLASSES = ['active'];

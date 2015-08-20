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

  c.updateRoot(
      vdom.createRoot()
          .type('TableRow')
          .attrs({'data-id': data.id})
          .classes(data.active ? app.ui.table_row.ACTIVE_CLASSES : null)
          .children(children));
};

app.ui.table_row.ACTIVE_CLASSES = ['active'];

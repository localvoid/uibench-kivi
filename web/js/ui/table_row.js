goog.provide('app.ui.table_row');
goog.require('app.ui.table_cell');
goog.require('uibench.state');
goog.require('kivi.CDescriptor');
goog.require('kivi.CTag');
goog.require('kivi.VNode');

goog.scope(function() {
  var VNode = kivi.VNode;

  app.ui.table_row.ACTIVE_CLASSES = ['active'];

  /** @type {!kivi.CDescriptor<!uibench.state.TableItemState, null>} */
  app.ui.table_row.d = kivi.CDescriptor.create('TableRow');
  app.ui.table_row.d.enableRecycling(100);
  app.ui.table_row.d.tag = 'tr';

  /** @param {!kivi.Component<!uibench.state.TableItemState, null>} c */
  app.ui.table_row.d.update = function(c) {
    var data = c.data;
    var props = data.props;

    var children = [VNode.createComponent(app.ui.table_cell.d, '#' + data.id)];
    for (var i = 0; i < props.length; i++) {
      children.push(VNode.createComponent(app.ui.table_cell.d, props[i]));
    }

    c.syncVRoot(
        VNode.createRoot()
            .classes(data.active ? 'TableRow active' : 'TableRow')
            .attrs({'data-id': data.id})
            .disableChildrenShapeError()
            .children(children));
  };

});

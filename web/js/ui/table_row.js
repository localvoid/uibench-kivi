goog.provide('app.ui.table_row');
goog.require('app.ui.table_cell');
goog.require('uibench.state');
goog.require('kivi.CDescriptor');
goog.require('kivi.CTag');
goog.require('kivi.VNode');

goog.scope(function() {
  var VNode = kivi.VNode;

  /** @type {!kivi.CDescriptor<!uibench.state.TableItemState, null>} */
  app.ui.table_row.d = kivi.CDescriptor.create('TableRow');
  app.ui.table_row.d.enableRecycling(100);
  app.ui.table_row.d.tag = kivi.CTag.create('tr').enableCloning()
      .updateHandler(function(node, a, b) {
        node = /** @type {!Element} */(node);
        if (a === void 0) {
          node.className = b[0] ? 'TableRow active' : 'TableRow';
          node.setAttribute('data-id', b[1]);
        } else if (a[0] !== b[0]) {
          node.className = b[0] ? 'TableRow active' : 'TableRow';
        }
      });

  /** @param {!kivi.Component<!uibench.state.TableItemState, null>} c */
  app.ui.table_row.d.update = function(c) {
    var data = c.data;
    var props = data.props;

    var children = [VNode.createComponent(app.ui.table_cell.d, '#' + data.id)];
    for (var i = 0; i < props.length; i++) {
      children.push(VNode.createComponent(app.ui.table_cell.d, props[i]));
    }

    c.syncVRoot(
        VNode.createCRoot([data.active, data.id])
            .disableChildrenShapeError()
            .children(children));
  };

});

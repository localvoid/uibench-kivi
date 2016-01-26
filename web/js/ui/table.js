goog.provide('app.ui.table');
goog.require('app.ui.table_row');
goog.require('uibench.state');
goog.require('kivi.CDescriptor');
goog.require('kivi.CTag');
goog.require('kivi.VNode');

goog.scope(function() {
  var VNode = kivi.VNode;

  /** @type {!kivi.CDescriptor<!uibench.state.TableState, null>} */
  app.ui.table.d = kivi.CDescriptor.create('Table');
  app.ui.table.d.tag = kivi.CTag.create('table').classes('Table');

  /** @param {!kivi.Component<!uibench.state.TableState, null>} c */
  app.ui.table.d.update = function(c) {
    var data = c.data;
    var items = data.items;

    var children = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      children.push(VNode.createComponent(app.ui.table_row.d, item).key(item.id));
    }

    c.syncVRoot(VNode.createRoot().children([
      VNode.createElement('tbody').trackByKey().children(children)
    ]));
  };
});

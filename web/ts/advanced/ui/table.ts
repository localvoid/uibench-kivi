import {ComponentDescriptor, VModel, VNode, createVElement} from "kivi";

const TableCell = new ComponentDescriptor<string, void>()
  .enableBackRef()
  .vModel(new VModel("td").enableCloning().className("TableCell"));

const _handleClick = TableCell.createEventHandler((e, c, p) => {
  console.log("Click", p);
  e.stopPropagation();
});

TableCell
  .init((c) => {
    (c.element as any).onclick = _handleClick;
  })
  .update((c, props) => {
    c.vSync(c.createVRoot().children(props));
  });

const TableRow = new ComponentDescriptor<TableItemState, void>()
  .vModel(new VModel<[boolean, number]>("tr").enableCloning()
    .updateHandler((node, a, b) => {
      const e = node as HTMLElement;
      if (a === undefined) {
        e.className = b[0] ? "TableRow active" : "TableRow";
        e.setAttribute("data-id", "" + b[1]);
      } else if (a[0] !== b[0]) {
        e.className = b[0] ? "TableRow active" : "TableRow";
      }
    }))
  .update((c, data) => {
    const props = data.props;

    const children = [TableCell.createVNode("#" + data.id)];
    for (let i = 0; i < props.length; i++) {
      children.push(TableCell.createVNode(props[i]));
    }

    c.vSync(c.createVRoot().data([data.active, data.id])
      .disableChildrenShapeError()
      .children(children));
  });

export const Table = new ComponentDescriptor<TableState, void>()
  .vModel(new VModel("table").enableCloning().className("Table"))
  .update((c, data) => {
    const items = data.items;

    const children: VNode[] = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      children.push(TableRow.createVNode(item).key(item.id));
    }

    c.vSync(c.createVRoot().children([
      createVElement("tbody").trackByKeyChildren(children),
    ]));
  });


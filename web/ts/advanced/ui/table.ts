import {ComponentDescriptor, VModel, VNode, createVElement} from "kivi";

const TableCell = new ComponentDescriptor<string, any>()
  .vModel(new VModel("td").enableCloning().className("TableCell"))
  .init((c) => {
    (c.element as any).xtag = c;
    (c.element as any).onclick = _handleClick;
  })
  .vRender((c, root) => { root.children(c.data); });

function _handleClick(e: MouseEvent) {
  console.log("Click", (e.currentTarget as any).xtag.data);
  e.stopPropagation();
}

const TableRow = new ComponentDescriptor<TableItemState, any>()
  .vModel(new VModel<[boolean, number]>("tr").enableCloning()
    .updateHandler((node, a, b) => {
      const e = node as HTMLElement;
      if (a === void 0) {
        e.className = b[0] ? "TableRow active" : "TableRow";
        e.setAttribute("data-id", "" + b[1]);
      } else if (a[0] !== b[0]) {
        e.className = b[0] ? "TableRow active" : "TableRow";
      }
    }))
  .vRender((c, root) => {
    const data = c.data;
    const props = data.props;

    const children = [TableCell.createVNode("#" + data.id)];
    for (let i = 0; i < props.length; i++) {
      children.push(TableCell.createVNode(props[i]));
    }

    root.data([data.active, data.id])
      .disableChildrenShapeError()
      .children(children);
  });

export const Table = new ComponentDescriptor<TableState, any>()
  .vModel(new VModel("table").enableCloning().className("Table"))
  .vRender((c, root) => {
    const data = c.data;
    const items = data.items;

    const children: VNode[] = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      children.push(TableRow.createVNode(item).key(item.id));
    }

    root.children([
      createVElement("tbody").trackByKeyChildren(children),
    ]);
  });


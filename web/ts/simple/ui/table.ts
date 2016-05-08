import {ComponentDescriptor, createVElement} from "kivi";

const TableCell = new ComponentDescriptor<string, any>()
  .tagName("td")
  .init((c) => {
    c.element.addEventListener("click", (e) => {
      console.log("Click", c.data);
      e.stopPropagation();
    });
  })
  .vRender((c, root) => { root.className("TableCell").children(c.data); });

const TableRow = new ComponentDescriptor<TableItemState, any>()
  .tagName("tr")
  .vRender((c, root) => {
    const data = c.data;
    const props = data.props;

    const children = [TableCell.createVNode("#" + data.id)];
    for (let i = 0; i < props.length; i++) {
      children.push(TableCell.createVNode(props[i]));
    }

    root
      .attrs({"data-id": data.id})
      .className(data.active ? "TableRow active" : "TableRow")
      .disableChildrenShapeError()
      .children(children);
  });

export const Table = new ComponentDescriptor<TableState, any>()
  .tagName("table")
  .vRender((c, root) => {
    root
      .className("Table")
      .children([
        createVElement("tbody")
          .trackByKeyChildren(c.data.items.map((i) => TableRow.createVNode(i).key(i.id))),
      ]);
  });

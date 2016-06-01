import {ComponentDescriptor, createVElement} from "kivi";

const TableCell = new ComponentDescriptor<string, void>()
  .tagName("td")
  .init((c, props) => {
    c.element.addEventListener("click", (e) => {
      console.log("Click", props);
      e.stopPropagation();
    });
  })
  .update((c, props) => {
    c.vSync(c.createVRoot().className("TableCell").children(props));
  });

const TableRow = new ComponentDescriptor<TableItemState, void>()
  .tagName("tr")
  .update((c, data) => {
    const props = data.props;

    const children = [TableCell.createVNode("#" + data.id)];
    for (let i = 0; i < props.length; i++) {
      children.push(TableCell.createVNode(props[i]));
    }

    c.vSync(c.createVRoot()
      .attrs({"data-id": data.id})
      .className(data.active ? "TableRow active" : "TableRow")
      .disableChildrenShapeError()
      .children(children));
  });

export const Table = new ComponentDescriptor<TableState, void>()
  .tagName("table")
  .update((c, props) => {
    c.vSync(c.createVRoot()
      .className("Table")
      .children([
        createVElement("tbody")
          .trackByKeyChildren(props.items.map((i) => TableRow.createVNode(i).key(i.id))),
      ]));
  });

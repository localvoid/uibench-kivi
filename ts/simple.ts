import {injectComponent, ComponentDescriptor, createVElement, VNode} from "kivi";

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
      children.push(TableCell.createImmutableVNode(props[i]));
    }

    c.vSync(c.createVRoot()
      .attrs({"data-id": data.id})
      .className(data.active ? "TableRow active" : "TableRow")
      .disableChildrenShapeError()
      .children(children));
  });

const Table = new ComponentDescriptor<TableState, void>()
  .tagName("table")
  .update((c, props) => {
    c.vSync(c.createVRoot()
      .className("Table")
      .children([
        createVElement("tbody")
          .trackByKeyChildren(props.items.map((i) => TableRow.createImmutableVNode(i).key(i.id))),
      ]));
  });

const AnimBox = new ComponentDescriptor<AnimBoxState, void>()
  .update((c, props) => {
    const t = props.time;

    c.vSync(c.createVRoot()
      .className("AnimBox")
      .attrs({"data-id": "" + props.id})
      .style("border-radius:" + (t % 10) + "px;" +
             "background:rgba(0,0,0," + (0.5 + ((t % 10) / 10)) + ")"));
  });

const Anim = new ComponentDescriptor<AnimState, void>()
  .update((c, props) => {
    c.vSync(c.createVRoot()
      .className("Anim")
      .trackByKeyChildren(props.items.map((i) => AnimBox.createImmutableVNode(i).key(i.id))));
  });

const TreeLeaf = new ComponentDescriptor<TreeNodeState, void>()
  .tagName("li")
  .update((c, props) => {
    c.vSync(c.createVRoot().className("TreeLeaf").children("" + props.id));
  });

const TreeNode = new ComponentDescriptor<TreeNodeState, void>()
  .tagName("ul")
  .update((c, props) => {
    c.vSync(c.createVRoot()
      .className("TreeNode")
      .trackByKeyChildren(props.children.map(
        (n) => n.container ?
          TreeNode.createImmutableVNode(n).key(n.id) :
          TreeLeaf.createImmutableVNode(n).key(n.id))));
  });

const Tree = new ComponentDescriptor<TreeState, void>()
  .update((c, props) => {
    c.vSync(c.createVRoot().className("Tree").children([TreeNode.createImmutableVNode(props.root)]));
  });

const Main = new ComponentDescriptor<AppState, void>()
  .update((c, data) => {
    const location = data && data.location;

    let children: VNode[] = null;
    if (location === "table") {
      children = [Table.createImmutableVNode(data.table)];
    } else if (location === "anim") {
      children = [Anim.createImmutableVNode(data.anim)];
    } else if (location === "tree") {
      children = [Tree.createImmutableVNode(data.tree)];
    }

    c.vSync(c.createVRoot().className("Main").children(children));
  });

uibench.init("kivi[simple]", "0.11.0-alpha.2");

document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.querySelector("#App");
  let main = injectComponent(Main, container, null, true);

  uibench.run(
    (state) => {
      main.update(state);
    },
    (samples) => {
      document.body.innerHTML = "<pre>" + JSON.stringify(samples, null, " ") + "</pre>";
      main = null;
    }
  );
});

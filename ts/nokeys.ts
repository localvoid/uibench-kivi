import {ComponentDescriptor, ElementDescriptor, VNode, createVElement, injectComponent} from "kivi";

const TableCell = new ComponentDescriptor<string, void>()
  .enableBackRef()
  .tagName(new ElementDescriptor("td").enableCloning().className("TableCell"))
  .update((c, props) => {
    c.sync(c.createVRoot().children(props));
  });

const TableCellOnClick = TableCell.createDelegatedEventHandler(".TableCell", true, (e, c, p) => {
  console.log("Click", p);
  e.stopPropagation();
});

const TableRow = new ComponentDescriptor<TableItemState, void>()
  .tagName(new ElementDescriptor<TableItemState>("tr").enableCloning()
    .update((node, a, b) => {
      const e = node as HTMLElement;
      if (a === undefined) {
        e.className = b.active ? "TableRow active" : "TableRow";
        e.setAttribute("data-id", "" + b.id);
      } else if (a.active !== b.active) {
        e.className = b.active ? "TableRow active" : "TableRow";
      }
    }))
  .init((c) => {
    (c.element as HTMLElement).onclick = TableCellOnClick;
  })
  .update((c, data) => {
    const props = data.props;

    const children = [TableCell.createVNode("#" + data.id)];
    for (let i = 0; i < props.length; i++) {
      children.push(TableCell.createImmutableVNode(props[i]));
    }

    c.sync(c.createVRoot()
      .data(data)
      .children(children));
  });

const Table = new ComponentDescriptor<TableState, void>()
  .tagName(new ElementDescriptor("table").enableCloning().className("Table"))
  .update((c, data) => {
    const items = data.items;

    const children: VNode[] = [];
    for (let i = 0; i < items.length; i++) {
      children.push(TableRow.createImmutableVNode(items[i]));
    }

    c.sync(c.createVRoot().children([
      createVElement("tbody").disableChildrenShapeError().children(children),
    ]));
  });

function animBoxStyle(t: number): string {
  return "border-radius:" + (t % 10) + "px;" +
         "background:rgba(0,0,0," + (0.5 + ((t % 10) / 10)) + ")";
}

const AnimBox = new ComponentDescriptor<AnimBoxState, any>()
  .tagName(new ElementDescriptor<AnimBoxState>("div").enableCloning().className("AnimBox")
    .update((node, a, b) => {
      const e = node as HTMLElement;
      if (a === undefined) {
        e.setAttribute("data-id", "" + b.id);
        e.style.cssText = animBoxStyle(b.time);
      } else if (a.time !== b.time) {
        e.style.cssText = animBoxStyle(b.time);
      }
    }))
  .update((c, props) => {
    c.sync(c.createVRoot()
      .data(props));
  });

const Anim = new ComponentDescriptor<AnimState, any>()
  .tagName(new ElementDescriptor("div").enableCloning().className("Anim"))
  .update((c, props) => {
    const items = props.items;

    const children: VNode[] = [];
    for (let i = 0; i < items.length; i++) {
      children.push(AnimBox.createImmutableVNode(items[i]));
    }

    c.sync(c.createVRoot().disableChildrenShapeError().children(children));
  });

const TreeLeaf = new ComponentDescriptor<TreeNodeState, void>()
  .tagName(new ElementDescriptor("li").enableCloning().className("TreeLeaf"))
  .update((c, props) => {
    c.sync(c.createVRoot().children("" + props.id));
  });

const TreeNode = new ComponentDescriptor<TreeNodeState, void>()
  .tagName(new ElementDescriptor("ul").enableCloning().className("TreeNode"))
  .update((c, data) => {
    const children: VNode[] = [];
    for (let i = 0; i < data.children.length; i++) {
      const n = data.children[i];
      children.push(n.container ? TreeNode.createImmutableVNode(n) : TreeLeaf.createImmutableVNode(n));
    }

    c.sync(c.createVRoot().disableChildrenShapeError().children(children));
  });

const Tree = new ComponentDescriptor<TreeState, void>()
  .tagName(new ElementDescriptor("div").enableCloning().className("Tree"))
  .update((c, props) => {
    c.sync(c.createVRoot().children([
      TreeNode.createImmutableVNode(props.root),
    ]));
  });

const Main = new ComponentDescriptor<AppState, any>()
  .tagName(new ElementDescriptor("div").className("Main"))
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

    c.sync(c.createVRoot().children(children));
  });

uibench.init("kivi[adv-nk]", "1.0.0");

document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.querySelector("#App");
  let main = injectComponent(Main, container, null, true);

  uibench.run(
    (state) => {
      main.update(state);
    },
    (samples) => {
      container.innerHTML = "<pre>" + JSON.stringify(samples, null, " ") + "</pre>";
      main = null;
    }
  );
});

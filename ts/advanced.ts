import {ComponentDescriptor, VModel, VNode, createVElement, injectComponent} from "kivi";

const TableCell = new ComponentDescriptor<string, void>()
  .enableBackRef()
  .vModel(new VModel("td").enableCloning().className("TableCell"))
  .update((c, props) => {
    c.vSync(c.createVRoot().children(props));
  });

const TableCellOnClick = TableCell.createDelegatedEventHandler(".TableCell", true, (e, c, p) => {
  console.log("Click", p);
  e.stopPropagation();
});

const TableRow = new ComponentDescriptor<TableItemState, void>()
  .vModel(new VModel<TableItemState>("tr").enableCloning()
    .updateHandler((node, a, b) => {
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

    c.vSync(c.createVRoot()
      .data(data)
      .disableChildrenShapeError()
      .children(children));
  });

const Table = new ComponentDescriptor<TableState, void>()
  .vModel(new VModel("table").enableCloning().className("Table"))
  .update((c, data) => {
    const items = data.items;

    const children: VNode[] = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      children.push(TableRow.createImmutableVNode(item).key(item.id));
    }

    c.vSync(c.createVRoot().children([
      createVElement("tbody").trackByKeyChildren(children),
    ]));
  });

const AnimBox = new ComponentDescriptor<AnimBoxState, any>()
  .vModel(new VModel<AnimBoxState>("div").enableCloning().className("AnimBox")
    .updateHandler((node, a, b) => {
      const t = b.time;
      const e = node as HTMLElement;
      if (a === undefined) {
        e.setAttribute("data-id", "" + b.id);
        e.style.cssText = "border-radius:" + (t % 10) + "px;" +
          "background:rgba(0,0,0," + (0.5 + ((t % 10) / 10)) + ")";
      } else if (a.time !== t) {
        e.style.cssText = "border-radius:" + (t % 10) + "px;" +
          "background:rgba(0,0,0," + (0.5 + ((t % 10) / 10)) + ")";
      }
    }))
  .update((c, props) => {
    c.vSync(c.createVRoot()
      .data(props));
  });

const Anim = new ComponentDescriptor<AnimState, any>()
  .vModel(new VModel("div").enableCloning().className("Anim"))
  .update((c, props) => {
    const items = props.items;

    const children: VNode[] = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      children.push(AnimBox.createImmutableVNode(item).key(item.id));
    }

    c.vSync(c.createVRoot().trackByKeyChildren(children));
  });

const TreeLeaf = new ComponentDescriptor<TreeNodeState, void>()
  .vModel(new VModel("li").enableCloning().className("TreeLeaf"))
  .update((c, props) => {
    c.vSync(c.createVRoot().children("" + props.id));
  });

const TreeNode = new ComponentDescriptor<TreeNodeState, void>()
  .vModel(new VModel("ul").enableCloning().className("TreeNode"))
  .update((c, data) => {
    const children: VNode[] = [];
    for (let i = 0; i < data.children.length; i++) {
      const n = data.children[i];
      const child = n.container ? TreeNode.createImmutableVNode(n) : TreeLeaf.createImmutableVNode(n);
      children.push(child.key(n.id));
    }

    c.vSync(c.createVRoot().trackByKeyChildren(children));
  });

const Tree = new ComponentDescriptor<TreeState, void>()
  .vModel(new VModel("div").enableCloning().className("Tree"))
  .update((c, props) => {
    c.vSync(c.createVRoot().children([
      TreeNode.createImmutableVNode(props.root),
    ]));
  });

const Main = new ComponentDescriptor<AppState, any>()
  .vModel(new VModel("div").className("Main"))
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

    c.vSync(c.createVRoot().children(children));
  });

uibench.init("kivi[adv]", "0.11.0-alpha.2");

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

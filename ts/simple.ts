import { injectComponent, ComponentDescriptor, createVElement, VNode } from "kivi";

const TableCell = new ComponentDescriptor<string, (e: MouseEvent) => void>()
  .tagName("td")
  .init((c, props) => {
    c.state = (e) => {
      console.log("Click", props);
      e.stopPropagation();
    };
  })
  .update((c, props, state) => {
    c.sync(c.createVRoot().props({ onclick: state }).className("TableCell").child(props));
  });

const TableRow = new ComponentDescriptor<TableItemState, void>()
  .tagName("tr")
  .update((c, data) => {
    const { props } = data;

    const children = [TableCell.createVNode("#" + data.id)];
    for (let i = 0; i < props.length; i++) {
      children.push(TableCell.createImmutableVNode(props[i]));
    }

    c.sync(c.createVRoot()
      .attrs({ "data-id": data.id })
      .className(data.active ? "TableRow active" : "TableRow")
      .children(children));
  });

const Table = new ComponentDescriptor<TableState, void>()
  .tagName("table")
  .update((c, props) => {
    const { items } = props;

    const children = new Array(items.length);
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      children[i] = TableRow.createImmutableVNode(item).key(item.id);
    }

    c.sync(c.createVRoot()
      .className("Table")
      .child(createVElement("tbody")
        .trackByKeyChildren(children)));
  });

const AnimBox = new ComponentDescriptor<AnimBoxState, void>()
  .update((c, props) => {
    const { time, id } = props;

    c.sync(c.createVRoot()
      .className("AnimBox")
      .attrs({ "data-id": "" + id })
      .style("border-radius:" + (time % 10) + "px;" + "background:rgba(0,0,0," + (0.5 + ((time % 10) / 10)) + ")"));
  });

const Anim = new ComponentDescriptor<AnimState, void>()
  .update((c, props) => {
    const { items } = props;

    const children = new Array(items.length);
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      children[i] = AnimBox.createImmutableVNode(item).key(item.id);
    }

    c.sync(c.createVRoot()
      .className("Anim")
      .trackByKeyChildren(props.items.map((i) => AnimBox.createImmutableVNode(i).key(i.id))));
  });

const TreeLeaf = new ComponentDescriptor<TreeNodeState, void>()
  .tagName("li")
  .update((c, props) => {
    c.sync(c.createVRoot().className("TreeLeaf").child("" + props.id));
  });

const TreeNode = new ComponentDescriptor<TreeNodeState, void>()
  .tagName("ul")
  .update((c, props) => {
    const items = props.children;

    const children = new Array(items.length);
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      children[i] = item.container ?
        TreeNode.createImmutableVNode(item).key(item.id) :
        TreeLeaf.createImmutableVNode(item).key(item.id);
    }

    c.sync(c.createVRoot()
      .className("TreeNode")
      .trackByKeyChildren(children));
  });

const Tree = new ComponentDescriptor<TreeState, void>()
  .update((c, props) => {
    c.sync(c.createVRoot().className("Tree").child(TreeNode.createImmutableVNode(props.root)));
  });

const Main = new ComponentDescriptor<AppState, void>()
  .update((c, data) => {
    const location = data && data.location;

    let children: VNode = null;
    if (location === "table") {
      children = Table.createImmutableVNode(data.table);
    } else if (location === "anim") {
      children = Anim.createImmutableVNode(data.anim);
    } else if (location === "tree") {
      children = Tree.createImmutableVNode(data.tree);
    }

    c.sync(c.createVRoot().className("Main").child(children));
  });

uibench.init("kivi[simple]", "1.0.0");

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

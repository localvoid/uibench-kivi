import {ComponentDescriptor, VModel, VNode} from "kivi";

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
      const child = n.container ? TreeNode.createVNode(n) : TreeLeaf.createVNode(n);
      children.push(child.key(n.id));
    }

    c.vSync(c.createVRoot().trackByKeyChildren(children));
  });

export const Tree = new ComponentDescriptor<TreeState, void>()
  .vModel(new VModel("div").enableCloning().className("Tree"))
  .update((c, props) => {
    c.vSync(c.createVRoot().children([
      TreeNode.createVNode(props.root),
    ]));
  });

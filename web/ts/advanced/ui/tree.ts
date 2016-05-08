import {ComponentDescriptor, VModel, VNode} from "kivi";

const TreeLeaf = new ComponentDescriptor<TreeNodeState, any>()
  .vModel(new VModel("li").enableCloning().className("TreeLeaf"))
  .vRender((c, root) => {
    root.children("" + c.data.id);
  });

const TreeNode = new ComponentDescriptor<TreeNodeState, any>()
  .vModel(new VModel("ul").enableCloning().className("TreeNode"))
  .vRender((c, root) => {
    const data = c.data;

    const children: VNode[] = [];
    for (let i = 0; i < data.children.length; i++) {
      const n = data.children[i];
      const child = n.container ? TreeNode.createVNode(n) : TreeLeaf.createVNode(n);
      children.push(child.key(n.id));
    }

    root.trackByKeyChildren(children);
  });

export const Tree = new ComponentDescriptor<TreeState, any>()
  .vModel(new VModel("div").enableCloning().className("Tree"))
  .vRender((c, root) => {
    root.children([
      TreeNode.createVNode(c.data.root),
    ]);
  });

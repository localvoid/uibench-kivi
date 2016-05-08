import {ComponentDescriptor} from "kivi";

const TreeLeaf = new ComponentDescriptor<TreeNodeState, any>()
  .tagName("li")
  .vRender((c, root) => { root.className("TreeLeaf").children("" + c.data.id); });

const TreeNode = new ComponentDescriptor<TreeNodeState, any>()
  .tagName("ul")
  .vRender((c, root) => {
    root
      .className("TreeNode")
      .trackByKeyChildren(c.data.children.map(
        (n) => n.container ?
          TreeNode.createVNode(n).key(n.id) :
          TreeLeaf.createVNode(n).key(n.id)));
  });

export const Tree = new ComponentDescriptor<TreeState, any>()
  .vRender((c, root) => { root.className("Tree").children([TreeNode.createVNode(c.data.root)]); });

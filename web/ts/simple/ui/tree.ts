import {ComponentDescriptor} from "kivi";

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
          TreeNode.createVNode(n).key(n.id) :
          TreeLeaf.createVNode(n).key(n.id))));
  });

export const Tree = new ComponentDescriptor<TreeState, void>()
  .update((c, props) => {
    c.vSync(c.createVRoot().className("Tree").children([TreeNode.createVNode(props.root)]));
  });

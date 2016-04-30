import {ComponentDescriptor, VNode, createVRoot} from 'kivi';

const TreeLeaf = new ComponentDescriptor<TreeNodeState, any>()
  .rootTag('li')
  .update((c) => {
    c.sync(createVRoot()
      .className('TreeLeaf')
      .children('' + c.data.id));
  });

const TreeNode = new ComponentDescriptor<TreeNodeState, any>()
  .rootTag('ul')
  .update((c) => {
    const data = c.data;

    const children: VNode[] = [];
    for (let i = 0; i < data.children.length; i++) {
      const n = data.children[i];
      let c: VNode;
      if (n.container) {
        c = TreeNode.createVNode(n);
      } else {
        c = TreeLeaf.createVNode(n);
      }
      children.push(c.key(n.id))
    }

    c.sync(createVRoot()
      .className('TreeNode')
      .trackByKeyChildren(children));
  });

export const Tree = new ComponentDescriptor<TreeState, any>()
  .update((c) => {
    c.sync(createVRoot()
      .className('Tree')
      .children([TreeNode.createVNode(c.data.root)]));
  });

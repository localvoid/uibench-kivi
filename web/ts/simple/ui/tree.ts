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
    c.sync(createVRoot()
      .className('TreeNode')
      .trackByKeyChildren(c.data.children.map(
        (n) => n.container ?
          TreeNode.createVNode(n).key(n.id) :
          TreeLeaf.createVNode(n).key(n.id))));
  });

export const Tree = new ComponentDescriptor<TreeState, any>()
  .update((c) => {
    c.sync(createVRoot()
      .className('Tree')
      .children([TreeNode.createVNode(c.data.root)]));
  });

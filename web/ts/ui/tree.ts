import {ComponentDescriptor, VModel, VNode, createRootFromModel} from 'kivi';

const TreeLeafRoot = new VModel('li').enableCloning().className('TreeLeaf');
const TreeLeaf = new ComponentDescriptor<TreeNodeState, any>('TreeLeaf')
  .rootModel(TreeLeafRoot)
  .update((c) => {
    c.sync(createRootFromModel(TreeLeafRoot).children('' + c.data.id));
  });

const TreeNodeRoot = new VModel('ul').enableCloning().className('TreeNode');
const TreeNode = new ComponentDescriptor<TreeNodeState, any>('TreeNode')
  .rootModel(TreeNodeRoot)
  .update((c) => {
    let data = c.data;

    let children: VNode[] = [];
    for (let i = 0; i < data.children.length; i++) {
      let n = data.children[i];
      let c: VNode;
      if (n.container) {
        c = TreeNode.createVNode(n);
      } else {
        c = TreeLeaf.createVNode(n);
      }
      children.push(c.key(n.id))
    }

    c.sync(createRootFromModel(TreeNodeRoot).trackByKeyChildren(children));
  });

const TreeRoot = new VModel('div').enableCloning().className('Tree');
export const Tree = new ComponentDescriptor<TreeState, any>('Tree')
  .rootModel(TreeRoot)
  .update((c) => {
    c.sync(createRootFromModel(TreeRoot).children([
      TreeNode.createVNode(c.data.root)
    ]));
  });

import {ComponentDescriptor, VNode, createVRoot} from 'kivi';
import {Table} from './table';
import {Anim} from './anim';
import {Tree} from './tree';

export const Main = new ComponentDescriptor<AppState, any>()
  .update((c) => {
    const data = c.data;
    const location = data && data.location;

    let children: VNode[] = null;
    if (location === 'table') {
      children = [Table.createVNode(data.table)];
    } else if (location === 'anim') {
      children = [Anim.createVNode(data.anim)];
    } else if (location === 'tree') {
      children = [Tree.createVNode(data.tree)];
    }

    c.sync(createVRoot().className('Main').children(children));
  });

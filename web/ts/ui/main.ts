import {ComponentDescriptor, VModel, VNode, createRootFromModel} from 'kivi';
import {Table} from './table';
import {Anim} from './anim';
import {Tree} from './tree';

const Root = new VModel('div').className('Main');

export const Main = new ComponentDescriptor<AppState, any>('Main')
  .rootModel(Root)
  .update((c) => {
    let data = c.data;
    let location = data && data.location;

    let children: VNode[] = null;
    if (location === 'table') {
      children = [Table.createVNode(data.table)];
    } else if (location === 'anim') {
      children = [Anim.createVNode(data.anim)];
    } else if (location === 'tree') {
      children = [Tree.createVNode(data.tree)];
    }

    c.sync(createRootFromModel(Root).children(children));
  });

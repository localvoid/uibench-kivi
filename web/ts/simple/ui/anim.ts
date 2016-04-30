import {ComponentDescriptor, VNode, createVRoot, createVElement} from 'kivi';

const AnimBox = new ComponentDescriptor<AnimBoxState, any>()
  .update((c) => {
    const t = c.data.time;

    c.sync(createVRoot()
      .className('AnimBox')
      .attrs({'data-id': '' + c.data.id})
      .style('border-radius:' + (t % 10) + 'px;' +
             'background:rgba(0,0,0,' + (0.5 + ((t % 10) / 10)) + ')'));
  })

export const Anim = new ComponentDescriptor<AnimState, any>()
  .update((c) => {
    const items = c.data.items;

    const children: VNode[] = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      children.push(AnimBox.createVNode(item).key(item.id));
    }

    c.sync(createVRoot()
      .className('Anim')
      .trackByKeyChildren(children));
  })

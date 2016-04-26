import {ComponentDescriptor, VModel, VNode, createRootFromModel} from 'kivi';

const AnimBoxRoot = new VModel<[number, number]>('div').enableCloning().className('AnimBox')
  .updateHandler((node, a, b) => {
    let t = b[1];
    let e = node as HTMLElement;
    if (a === void 0) {
      e.setAttribute('data-id', '' + b[0]);
      e.style.cssText = 'border-radius:' + (t % 10) + 'px;' +
                        'background:rgba(0,0,0,' + (0.5 + ((t % 10) / 10)) + ')';
    } else if (a[1] !== t) {
      e.style.cssText = 'border-radius:' + (t % 10) + 'px;' +
                        'background:rgba(0,0,0,' + (0.5 + ((t % 10) / 10)) + ')';
    }
  })

const AnimBox = new ComponentDescriptor<AnimBoxState, any>('AnimBox')
  .rootModel(AnimBoxRoot)
  .update((c) => {
    c.sync(createRootFromModel(AnimBoxRoot, [c.data.id, c.data.time]));
  })

const AnimRoot = new VModel('div').enableCloning().className('Anim');
export const Anim = new ComponentDescriptor<AnimState, any>('Anim')
  .rootModel(AnimRoot)
  .update((c) => {
    let items = c.data.items;

    let children: VNode[] = [];
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      children.push(AnimBox.createVNode(item).key(item.id));
    }

    c.sync(createRootFromModel(AnimRoot).trackByKeyChildren(children));
  })
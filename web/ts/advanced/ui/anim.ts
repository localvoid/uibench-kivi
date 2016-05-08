import {ComponentDescriptor, VModel, VNode} from "kivi";

const AnimBox = new ComponentDescriptor<AnimBoxState, any>()
  .vModel(new VModel<[number, number]>("div").enableCloning().className("AnimBox")
    .updateHandler((node, a, b) => {
      const t = b[1];
      const e = node as HTMLElement;
      if (a === void 0) {
        e.setAttribute("data-id", "" + b[0]);
        e.style.cssText = "border-radius:" + (t % 10) + "px;" +
          "background:rgba(0,0,0," + (0.5 + ((t % 10) / 10)) + ")";
      } else if (a[1] !== t) {
        e.style.cssText = "border-radius:" + (t % 10) + "px;" +
          "background:rgba(0,0,0," + (0.5 + ((t % 10) / 10)) + ")";
      }
    }))
  .vRender((c, root) => {
    root.data([c.data.id, c.data.time]);
  });

export const Anim = new ComponentDescriptor<AnimState, any>()
  .vModel(new VModel("div").enableCloning().className("Anim"))
  .vRender((c, root) => {
    const items = c.data.items;

    const children: VNode[] = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      children.push(AnimBox.createVNode(item).key(item.id));
    }

    root.trackByKeyChildren(children);
  });

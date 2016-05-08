import {ComponentDescriptor} from "kivi";

const AnimBox = new ComponentDescriptor<AnimBoxState, any>()
  .vRender((c, root) => {
    const t = c.data.time;

    root
      .className("AnimBox")
      .attrs({"data-id": "" + c.data.id})
      .style("border-radius:" + (t % 10) + "px;" +
             "background:rgba(0,0,0," + (0.5 + ((t % 10) / 10)) + ")");
  });

export const Anim = new ComponentDescriptor<AnimState, any>()
  .vRender((c, root) => {
    root
      .className("Anim")
      .trackByKeyChildren(c.data.items.map((i) => AnimBox.createVNode(i).key(i.id)));
  });

import {ComponentDescriptor} from "kivi";

const AnimBox = new ComponentDescriptor<AnimBoxState, void>()
  .update((c, props) => {
    const t = props.time;

    c.vSync(c.createVRoot()
      .className("AnimBox")
      .attrs({"data-id": "" + props.id})
      .style("border-radius:" + (t % 10) + "px;" +
             "background:rgba(0,0,0," + (0.5 + ((t % 10) / 10)) + ")"));
  });

export const Anim = new ComponentDescriptor<AnimState, void>()
  .update((c, props) => {
    c.vSync(c.createVRoot()
      .className("Anim")
      .trackByKeyChildren(props.items.map((i) => AnimBox.createVNode(i).key(i.id))));
  });

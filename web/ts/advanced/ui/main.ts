import {ComponentDescriptor, VModel, VNode} from "kivi";
import {Table} from "./table";
import {Anim} from "./anim";
import {Tree} from "./tree";

export const Main = new ComponentDescriptor<AppState, any>()
  .vModel(new VModel("div").className("Main"))
  .update((c, data) => {
    const location = data && data.location;

    let children: VNode[] = null;
    if (location === "table") {
      children = [Table.createVNode(data.table)];
    } else if (location === "anim") {
      children = [Anim.createVNode(data.anim)];
    } else if (location === "tree") {
      children = [Tree.createVNode(data.tree)];
    }

    c.vSync(c.createVRoot().children(children));
  });

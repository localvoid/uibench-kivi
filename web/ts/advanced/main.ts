import {Main} from "./ui/main";
import {injectComponent} from "kivi";

uibench.init("kivi[adv]", "0.9.0");

document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.querySelector("#App");
  let main = injectComponent(Main, container, undefined, true);

  uibench.run(
    (state) => {
      main.setData(state);
      main.update();
    },
    (samples) => {
      document.body.innerHTML = "<pre>" + JSON.stringify(samples, null, " ") + "</pre>";
      main = undefined;
    }
  );
});

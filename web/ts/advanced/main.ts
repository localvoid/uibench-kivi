import {Main} from "./ui/main";
import {injectComponent} from "kivi";

uibench.init("kivi[adv]", "0.10.0");

document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.querySelector("#App");
  let main = injectComponent(Main, container, null, true);

  uibench.run(
    (state) => {
      main.update(state);
    },
    (samples) => {
      document.body.innerHTML = "<pre>" + JSON.stringify(samples, null, " ") + "</pre>";
      main = null;
    }
  );
});

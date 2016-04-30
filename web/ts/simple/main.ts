import {Main} from './ui/main';
import {injectComponent} from 'kivi';

uibench.init('kivi[simple]', '0.9.0');

document.addEventListener('DOMContentLoaded', (e) => {
  let container = document.querySelector('#App');
  let main = injectComponent(Main, null, container);

  uibench.run(
    (state) => {
      main.setData(state);
      main.update();
    },
    (samples) => {
      document.body.innerHTML = '<pre>' + JSON.stringify(samples, null, ' ') + '</pre>';
      main = null;
    }
  )
});

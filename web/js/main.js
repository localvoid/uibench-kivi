goog.provide('app.main');
goog.require('kivi.injectComponent');
goog.require('uibench.init');
goog.require('uibench.run');
goog.require('uibench.state');
goog.require('app.ui.main');

uibench.init('kivi', '0.7.1');

document.addEventListener('DOMContentLoaded', function(e) {
  var container = document.querySelector('#App');

  /** @type {kivi.Component<!uibench.state.AppState,null>} */
  var main = kivi.injectComponent(app.ui.main.d, null, /** @type {!Element} */(container));
  uibench.run(
      function(state) {
        main.data = state;
        app.ui.main.d.update(main);
      },
      function(samples) {
        document.body.innerHTML = '<pre>' + JSON.stringify(samples, null, ' ') + '</pre>';
        main = null;
      }
  );
}, false);

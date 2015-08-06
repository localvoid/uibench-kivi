goog.provide('app.main');
goog.require('kivi');
goog.require('kivi.env');
goog.require('kivi.Scheduler');
goog.require('vdom');
goog.require('uibench.init');
goog.require('uibench.run');
goog.require('uibench.state');
goog.require('app.ui.main');

kivi.init(new kivi.Scheduler());

uibench.init('kivi', '0.3.0');

document.addEventListener('DOMContentLoaded', function(e) {
  /** @type {vdom.Component<!uibench.state.AppState,null>} */
  var main = vdom.injectComponent(app.ui.main.d, null, document.body);
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

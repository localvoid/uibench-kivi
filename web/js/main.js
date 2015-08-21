goog.provide('app.main');
goog.require('kivi');
goog.require('uibench.init');
goog.require('uibench.run');
goog.require('uibench.state');
goog.require('app.ui.main');

kivi.init(new kivi.Scheduler());

uibench.init('kivi', '0.4.0');

document.addEventListener('DOMContentLoaded', function(e) {
  /** @type {kivi.Component<!uibench.state.AppState,null>} */
  var main = kivi.injectComponent(app.ui.main.d, null, document.body);
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

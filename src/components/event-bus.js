var eventBus = {
  install: function (Vue) {
    Vue.prototype.eb = new Vue()
  }
};

module.exports = eventBus;
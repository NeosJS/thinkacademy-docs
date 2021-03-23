// import CanvasCountdown from "./canvas-countdown/index.js";
// import Countdown from "./countdown/index.js";
import Loading from "./loading/index.js";

const components = [Loading];
const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$ThinkAcademy = {
    size: opts.size || "",
    zIndex: opts.zIndex || 2000
  };
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  // CanvasCountdown,
  // Countdown,
  Loading
};
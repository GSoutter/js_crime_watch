import Vue from 'vue'
import App from './App.vue'
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)

import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;

Icon.Default.imagePath = '.';
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


Vue.config.productionTip = false

export const eventBus = new Vue();


new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import eventsModule from './modules/events';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: { eventsModule },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

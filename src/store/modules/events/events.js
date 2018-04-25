import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const defaultState = {
  events: [],
  loading: false,
};

export const EVENTS_MODULE = 'eventsModule';

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations,
};

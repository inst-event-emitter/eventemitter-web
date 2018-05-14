import getters from './getters';
import actions from './actions';
import mutations from './mutations';

import { CREATE_EVENT_ASYNC_TYPES_ACTION } from './consts';

const defaultState = {
  events: [],
  loading: false,
  isEventCreation: false,
  [CREATE_EVENT_ASYNC_TYPES_ACTION.loadingKey]: false,
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations,
};

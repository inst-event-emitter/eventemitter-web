import { GET_EVENTS, GET_IS_EVENTS_LOADING, GET_IS_EVENT_CREATION, GET_IS_EVENT_CREATING,
  CREATE_EVENT_ASYNC_TYPES_ACTION } from './consts';

export default {
  [GET_EVENTS]: state => state.events,
  [GET_IS_EVENTS_LOADING]: state => state.loading,
  [GET_IS_EVENT_CREATION]: state => state.isEventCreation,
  [GET_IS_EVENT_CREATING]: state => state[CREATE_EVENT_ASYNC_TYPES_ACTION.loadingKey],
};

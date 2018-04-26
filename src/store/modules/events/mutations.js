import { SET_LOADING_MUTATION, SET_EVENTS_MUTATION, TOGGLE_EVENT_CREATION_MUTATION,
  CREATE_EVENT_ASYNC_TYPES_ACTION } from './consts';

export default {
  [SET_LOADING_MUTATION]: (state, payload) => {
    state.loading = payload;
  },
  [SET_EVENTS_MUTATION]: (state, payload) => {
    const { events = [] } = payload;
    state.events = events.map(event => ({
      ...event,
      imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg',
    }));
  },
  [TOGGLE_EVENT_CREATION_MUTATION]: (state) => {
    state.isEventCreation = !state.isEventCreation;
  },

  [CREATE_EVENT_ASYNC_TYPES_ACTION.PENDING]: (state) => {
    state[CREATE_EVENT_ASYNC_TYPES_ACTION.loadingKey] = true;
  },

  [CREATE_EVENT_ASYNC_TYPES_ACTION.SUCCESS]: (state) => {
    state[CREATE_EVENT_ASYNC_TYPES_ACTION.loadingKey] = false;
  },

  [CREATE_EVENT_ASYNC_TYPES_ACTION.FAILURE]: (state) => {
    state[CREATE_EVENT_ASYNC_TYPES_ACTION.loadingKey] = false;
  },
};

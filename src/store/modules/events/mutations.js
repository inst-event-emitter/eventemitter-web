
export const SET_LOADING = 'setLoading';
export const SET_EVENTS = 'setEvents';
export const TOGGLE_EVENT_CREATION = 'toggleEventCreation';

export default {
  [SET_LOADING]: (state, payload) => {
    state.loading = payload;
  },
  [SET_EVENTS]: (state, payload) => {
    const { events = [] } = payload;
    state.events = events.map(event => ({
      ...event,
      imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg',
    }));
  },
  [TOGGLE_EVENT_CREATION]: (state) => {
    state.isEventCreation = !state.isEventCreation;
  },
};

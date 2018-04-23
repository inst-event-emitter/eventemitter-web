
export const SET_LOADING = 'setLoading';
export const SET_EVENTS = 'setEvevnts';

export default {
  [SET_LOADING]: (state, payload) => {
    state.loading = payload;
  },
  [SET_EVENTS]: (state, payload) => {
    state.events = payload.events;
  },
};

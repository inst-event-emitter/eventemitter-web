
export const GET_EVENTS = 'getEvents';
export const IS_EVENTS_LOADING = 'isEventsLoading';

export default {
  [GET_EVENTS]: state => state.events,
  [IS_EVENTS_LOADING]: state => state.loading,
};

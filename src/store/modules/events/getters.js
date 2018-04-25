
export const GET_EVENTS = 'getEvents';
export const IS_EVENTS_LOADING = 'isEventsLoading';
export const IS_EVENT_CREATION = 'isEventCreation';

export default {
  [GET_EVENTS]: state => state.events,
  [IS_EVENTS_LOADING]: state => state.loading,
  [IS_EVENT_CREATION]: state => state.isEventCreation,
};

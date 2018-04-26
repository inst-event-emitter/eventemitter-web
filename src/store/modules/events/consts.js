import createAsyncActionStates from '../../../utils/createAsyncActionStates';

/* Module name */
export const EVENTS_MODULE_NAME = 'eventsModule';

/* Actions */
export const LOAD_EVENTS_ACTION = 'loadEvents';
export const CREATE_EVENT_ACTION = 'createEvent';
export const CREATE_EVENT_ASYNC_TYPES_ACTION = createAsyncActionStates(CREATE_EVENT_ACTION);

/* Getters */
export const GET_EVENTS = 'getEvents';
export const GET_IS_EVENTS_LOADING = 'isEventsLoading';
export const GET_IS_EVENT_CREATION = 'isEventCreation';
export const GET_IS_EVENT_CREATING = 'isEventCreating';

/* Mutations */
export const SET_LOADING_MUTATION = 'setLoading';
export const SET_EVENTS_MUTATION = 'setEvents';
export const TOGGLE_EVENT_CREATION_MUTATION = 'toggleEventCreation';

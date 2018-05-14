import axios from 'axios';
import { get } from 'lodash';
import moment from 'moment';

import { LOAD_EVENTS_ACTION, CREATE_EVENT_ACTION, CREATE_EVENT_ASYNC_TYPES_ACTION,
  SET_LOADING_MUTATION, SET_EVENTS_MUTATION } from './consts';

export default {
  [LOAD_EVENTS_ACTION]: async ({ commit }) => {
    commit(SET_LOADING_MUTATION, true);

    try {
      const response = await axios.get('/api/v1/events');

      commit(SET_EVENTS_MUTATION, {
        events: get(response, 'data.events', [])
          .map(event => ({
            ...event,
            date: moment(get(event, 'date', '')).format('YYYY-MM-DD HH:mm'),
          })),
      });
      commit(SET_LOADING_MUTATION, false);
    } catch (err) {
      commit(SET_LOADING_MUTATION, false);
    }
  },
  [CREATE_EVENT_ACTION]: async ({ commit }, payload) => {
    const { name, description, date } = payload;
    try {
      commit(CREATE_EVENT_ASYNC_TYPES_ACTION.PENDING);
      const response = await axios.post('/api/v1/events', {
        name,
        description,
        date,
      });
      commit(get(response, 'status') === 201
        ? CREATE_EVENT_ASYNC_TYPES_ACTION.SUCCESS
        : CREATE_EVENT_ASYNC_TYPES_ACTION.FAILURE,
      );
    } catch (err) {
      commit(CREATE_EVENT_ASYNC_TYPES_ACTION.FAILURE);
    }
  },
};

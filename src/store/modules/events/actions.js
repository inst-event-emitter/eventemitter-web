import axios from 'axios';
import { isEmpty, get } from 'lodash';

import { LOAD_EVENTS_ACTION, CREATE_EVENT_ACTION, CREATE_EVENT_ASYNC_TYPES_ACTION,
  SET_LOADING_MUTATION, SET_EVENTS_MUTATION } from './consts';

export default {
  [LOAD_EVENTS_ACTION]: async ({ commit }) => {
    commit(SET_LOADING_MUTATION, true);

    try {
      const response = await axios.get('/api/v1/events');

      commit(SET_EVENTS_MUTATION, {
        events: get(response, 'data.events', []),
      });
      commit(SET_LOADING_MUTATION, false);
    } catch (err) {
      commit(SET_LOADING_MUTATION, false);
    }
  },
  [CREATE_EVENT_ACTION]: async ({ commit }, payload) => {
    const { name, description, date, time } = payload;
    try {
      commit(CREATE_EVENT_ASYNC_TYPES_ACTION.PENDING);
      const response = await axios.post('/api/v1/events', {
        name,
        description,
        date: isEmpty(time) ? date : `${date} ${time}`,
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

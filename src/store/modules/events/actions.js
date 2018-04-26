import axios from 'axios';
import { isEmpty, get } from 'lodash';

import { LOAD_EVENTS_ACTION, CREATE_EVENT_ACTION, CREATE_EVENT_ASYNC_TYPES_ACTION,
  SET_LOADING_MUTATION, SET_EVENTS_MUTATION } from './consts';

const SERVER_URL = 'http://localhost:3000';

export default {
  [LOAD_EVENTS_ACTION]: async ({ commit }) => {
    commit(SET_LOADING_MUTATION, true);

    try {
      const { data: events = [] } = await axios.get(`${SERVER_URL}/api/v1/events`);
      commit(SET_EVENTS_MUTATION, { events });
      commit(SET_LOADING_MUTATION, false);
    } catch (err) {
      commit(SET_LOADING_MUTATION, false);
    }
  },
  [CREATE_EVENT_ACTION]: async ({ commit }, payload) => {
    const { name, description, date, time } = payload;
    try {
      commit(CREATE_EVENT_ASYNC_TYPES_ACTION.PENDING);
      const response = await axios.post(`${SERVER_URL}/api/v1/events`, {
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

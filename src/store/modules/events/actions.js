import axios from 'axios';

import { SET_LOADING, SET_EVENTS } from './mutations';

export const LOAD_EVENTS = 'loadEvents';

export default {
  [LOAD_EVENTS]: async ({ commit }) => {
    commit(SET_LOADING, true);
    try {
      const { data: events = [] } = await axios.get('http://localhost:3000/api/v1/events');
      commit(SET_EVENTS, { events });
      commit(SET_LOADING, false);
    } catch (err) {
      commit(SET_LOADING, false);
    }
  },
};

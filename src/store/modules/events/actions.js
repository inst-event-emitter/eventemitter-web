import axios from 'axios';

import { SET_LOADING, SET_EVENTS } from './mutations';

export const LOAD_EVENTS = 'loadEvents';

export default {
  [LOAD_EVENTS]: async ({ commit }) => {
    commit(SET_LOADING, true);
    try {
      const { data = [] } = await axios.get('http://localhost.1/api/v1/events', {
        headers: { 'Access-Control-Allow-Origin': '*' },
        // proxy: {
        //   host: '127.0.0.1',
        //   port: 3000,
        // },
      });
      console.log('events: ', data);
      commit(SET_EVENTS, data);
      commit(SET_LOADING, false);
    } catch (err) {
      console.log(err);
      commit(SET_LOADING, false);
    }
  },
};

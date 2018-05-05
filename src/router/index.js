import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Events from '@/components/Events';
import FullCalendar from '@/components/Calendar';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: FullCalendar,
    },
  ],
});

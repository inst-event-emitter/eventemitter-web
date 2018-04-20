import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/home';
import Events from '@/components/events';

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
  ],
});

<template>
  <Nav>
    <full-calendar :events="events" :config="config"></full-calendar>
  </Nav>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar';
import "fullcalendar/dist/fullcalendar.min.css";

import Nav from '@/components/Nav';

export default {
  components: {
    FullCalendar,
    Nav,
  },
  data() {
    return {
      events: [
        {
          title: 'event1',
          start: '2018-05-01',
        },
        {
          title: 'event2',
          start: '2018-05-05',
          end: '2018-05-07',
        },
        {
          title: 'event3',
          start: '2018-05-09T12:30:00',
          allDay: false,
        },
      ],
      config: {
        defaultView: 'month',
      },
    }
  }
}
</script>

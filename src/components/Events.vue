<template>
  <Nav>
    <v-layout row wrap align-center>
      <v-flex xs12 md6 offset-md3>
        <h1 v-if="isLoading">Yes</h1>
        <div v-for="event in events" :key="event.title">
          <v-card class="my-3" hover>
            <v-card-media
              class="white--text"
              height="140px"
              :src="event.imgUrl"
            >
              <v-container fill-height fluid>
                <v-layout column justify-space-between>
                  <span class="headline">{{event.name}}</span>
                  <span class="headline">{{event.date}}</span>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-text>
              <v-flex xs12 align-start d-flex>
                <span :style="{ textAlign: 'justify', textIndent: '1.5em' }">
                  {{event.description}}
                </span>
              </v-flex>
            </v-card-text>
            <v-card-actions>
              <v-btn flat class="blue--text">Read More</v-btn>
              <v-btn icon class="red--text">
                <v-icon medium>place</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-flex>
      <v-btn fab dark color="teal lighten-1" fixed right bottom>
        <v-icon :style="{ height: 'auto' }">add</v-icon>
      </v-btn>
    </v-layout>
  </Nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Nav from '@/components/Nav';

import { EVENTS_MODULE } from '../store/modules/events/events';
import { GET_EVENTS, IS_EVENTS_LOADING } from '../store/modules/events/getters';
import { LOAD_EVENTS } from '../store/modules/events/actions';

export default {
  created() {
    this.loadEvents();
  },
  components: { Nav },
  computed: {
    ...mapGetters(EVENTS_MODULE, {
      events: GET_EVENTS,
      isLoading: IS_EVENTS_LOADING,
    }),
  },
  methods: {
    ...mapActions(EVENTS_MODULE, [LOAD_EVENTS]),
  },
};
</script>

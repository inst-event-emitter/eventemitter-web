<template>
  <Nav>
    <v-layout row wrap align-center>
      <v-flex xs12 md6 offset-md3>
        <h1 v-if="isLoading">Yes</h1>
        <div v-for="event in events" :key="event.id">
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
      <v-btn
        fab dark fixed right bottom
        color="teal lighten-1"
        @click.stop="toggleEventCreation"
      >
        <v-icon :style="{ height: 'auto' }">add</v-icon>
      </v-btn>
    </v-layout>
    <CreateEvevnt
      :show="isEventCreation"
      :onClose="toggleEventCreation"
    />
  </Nav>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

import Nav from '@/components/Nav';
import CreateEvevnt from '@/components/CreateEvent';

import { EVENTS_MODULE } from '../store/modules/events/index';
import { GET_EVENTS, IS_EVENTS_LOADING, IS_EVENT_CREATION } from '../store/modules/events/getters';
import { LOAD_EVENTS } from '../store/modules/events/actions';
import { TOGGLE_EVENT_CREATION } from '../store/modules/events/mutations';

export default {
  created() {
    this[LOAD_EVENTS]();
  },
  components: { Nav, CreateEvevnt },
  computed: {
    ...mapGetters(EVENTS_MODULE, {
      events: GET_EVENTS,
      isLoading: IS_EVENTS_LOADING,
      isEventCreation: IS_EVENT_CREATION,
    }),
  },
  methods: {
    ...mapActions(EVENTS_MODULE, [LOAD_EVENTS]),
    ...mapMutations(EVENTS_MODULE, {
      toggleEventCreation: TOGGLE_EVENT_CREATION,
    }),
  },
};
</script>

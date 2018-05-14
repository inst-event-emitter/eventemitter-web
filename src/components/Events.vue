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
    <CreateEvent
      :show="isEventCreation"
      :onClose="toggleEventCreation"
      :onCreate="createEvent"
      :isCreating="isEventCreating"
    />
  </Nav>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

import Nav from '@/components/Nav';
import CreateEvent from '@/components/CreateEvent';

import { EVENTS_MODULE_NAME, GET_EVENTS, GET_IS_EVENTS_LOADING, GET_IS_EVENT_CREATION,
  GET_IS_EVENT_CREATING, LOAD_EVENTS_ACTION, CREATE_EVENT_ACTION,
  TOGGLE_EVENT_CREATION_MUTATION } from '../store/modules/events/consts';

export default {
  created() {
    this.loadEvents();
  },
  components: { Nav, CreateEvent },
  computed: {
    ...mapGetters(EVENTS_MODULE_NAME, {
      events: GET_EVENTS,
      isLoading: GET_IS_EVENTS_LOADING,
      isEventCreation: GET_IS_EVENT_CREATION,
      isEventCreating: GET_IS_EVENT_CREATING,
    }),
  },
  methods: {
    ...mapActions(EVENTS_MODULE_NAME, {
      loadEvents: LOAD_EVENTS_ACTION,
      createEvent: CREATE_EVENT_ACTION,
    }),
    ...mapMutations(EVENTS_MODULE_NAME, {
      toggleEventCreation: TOGGLE_EVENT_CREATION_MUTATION,
    }),
  },
};
</script>

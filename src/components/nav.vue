<template>
  <v-app id="event-emitter">
    <v-navigation-drawer
      fixed
      v-model="isMenuOpen"
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link
                :to="{ name: 'home' }"
                :style="{ color: 'black', textDecoration: 'none' }"
                exact
              >
                Home
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link
                :to="{ name: 'events' }"
                :style="{ color: 'black', textDecoration: 'none' }"
                exact
              >
                Events
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="teal lighten-1" dark absolute app>
      <v-toolbar-side-icon @click.stop="isMenuOpen = !isMenuOpen"/>
      <v-toolbar-title>Event Emitter</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat class="hidden-xs-only">Sign In</v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <slot></slot>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    isMenuOpen: false,
  }),
};
</script>

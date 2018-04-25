<template>
  <v-dialog :value="show" max-width="850px" persistent>
    <v-card>
      <v-card-title class="teal lighten-1">
        <p class="title white--text">New Event</p>
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Name"
          v-model="name"
          hint="At least 10 characters"
          counter=50
          required
        />
        <v-text-field
          label="Description"
          v-model="description"
          hint="At least 20 characters"
          counter=500
          required
          multi-line
        />
      </v-card-text>
      <v-menu
        ref="datePicker"
        lazy
        :close-on-content-click="false"
        v-model="datePickerMenu"
        transition="scale-transition"
        offset-y
        :nudge-right="40"
        min-width="290px"
        :return-value.sync="date"
      >
        <v-text-field
          slot="activator"
          label="Date"
          v-model="date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker
          v-model="date"
          color="teal lighten-1"
          @input="$refs.datePicker.save(date)"
        />
      </v-menu>
      <v-divider />
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="onClose">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    name: '',
    description: '',
    date: '',
    datePickerMenu: false,
  }),
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
  },
};
</script>


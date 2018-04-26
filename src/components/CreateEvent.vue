<template>
  <v-dialog :value="show" max-width="850px" persistent>
    <v-card>
      <v-card-title class="teal lighten-1">
        <span class="title white--text">New Event</span>
        <v-spacer />
        <v-btn @click="closeModal" outline color="white" icon>
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Name"
            v-model.trim="name"
            :counter="nameMax"
            :hint="nameHint"
            :error-messages="nameErrors"
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
            required
          />
          <v-text-field
            label="Description"
            v-model.trim="description"
            :counter="descriptionMax"
            :hint="descriptionHint"
            :error-messages="descriptionErrors"
            @input="$v.description.$touch()"
            @blur="$v.description.$touch()"
            required
            multi-line
          />
          <v-menu
            ref="datePicker"
            lazy
            :close-on-content-click="false"
            v-model="isOpenDatePicker"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            min-width="290px"
            :return-value.sync="date"
          >
            <v-text-field
              slot="activator"
              label="Date"
              v-model="date"
              prepend-icon="event"
              :error-messages="dateErrors"
              @input="$v.date.$touch()"
              @blur="$v.date.$touch()"
              readonly
            />
            <v-date-picker
              v-model="date"
              scrollable
              header-color="teal lighten-1"
              :min="nowDate"
            >
              <v-spacer></v-spacer>
              <v-btn @click="$refs.datePicker.save(date)" outline color="teal lighten-1">
                Save
              </v-btn>
              <v-btn @click="isOpenDatePicker=false" outline color="brown lighten-1">
                Cancel
              </v-btn>
            </v-date-picker>
          </v-menu>
          <v-menu
            ref="timePicker"
            lazy
            :close-on-content-click="false"
            v-model="isOpenTimePicker"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
            :return-value.sync="time"
          >
            <v-text-field
              slot="activator"
              label="Time"
              v-model="time"
              prepend-icon="access_time"
              readonly
            />
            <v-time-picker
              v-model="time"
              color="teal lighten-1"
            >
              <v-spacer></v-spacer>
              <v-btn @click="$refs.timePicker.save(time)" outline color="teal lighten-1">
                Save
              </v-btn>
              <v-btn @click="isOpenTimePicker=false" outline color="brown lighten-1">
                Cancel
              </v-btn>
            </v-time-picker>
          </v-menu>
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer/>
        <v-btn
          @click="submit"
          color="teal lighten-1"
          :disabled="isCreating"
          outline
        >
          Create
        </v-btn>
        <v-btn @click="clear" outline color="brown lighten-1">Clear</v-btn>
      </v-card-actions>
      <v-progress-linear v-if="isCreating" color="teal lighten-1" indeterminate size="15" width=2 />
    </v-card>
    <!--<v-progress-circular v-if="isCreating" indeterminate :size="50" color="primary" />-->
  </v-dialog>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, minLength } from 'vuelidate/lib/validators';
import moment from 'moment';

const nameMin = 5;
const nameMax = 50;
const descriptionMin = 50;
const descriptionMax = 1000;

export default {
  mixins: [validationMixin],
  validations: {
    name: {
      required,
      minLength: minLength(nameMin),
      maxLength: maxLength(nameMax),
    },
    description: {
      required,
      minLength: minLength(descriptionMin),
      maxLength: maxLength(descriptionMax),
    },
    date: {
      required,
    },
  },
  data: () => ({
    name: null,
    description: null,
    date: null,
    time: null,
    isOpenDatePicker: false,
    isOpenTimePicker: false,
    nowDate: moment().format('YYYY-MM-DD'),

    nameHint: `At least ${nameMin} characters`,
    descriptionHint: `At least ${descriptionMin} characters`,

    nameMax,
    descriptionMax,
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) {
        return errors;
      }

      if (!this.$v.name.required) {
        errors.push('Event Name is required.');
      }

      if (!this.$v.name.minLength) {
        errors.push(`Name must be more than ${nameMin} characters`);
      }

      if (!this.$v.name.maxLength) {
        errors.push(`Name must be less than ${nameMax} characters`);
      }

      return errors;
    },

    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) {
        return errors;
      }

      if (!this.$v.description.required) {
        errors.push('Event Description is required.');
      }

      if (!this.$v.description.minLength) {
        errors.push(`Description must be more than ${descriptionMin} characters`);
      }

      if (!this.$v.description.maxLength) {
        errors.push(`Description must be less than ${descriptionMax} characters`);
      }

      return errors;
    },

    dateErrors() {
      const errors = [];
      if (!this.$v.date.$dirty) {
        return errors;
      }

      if (!this.$v.date.required) {
        errors.push('Event Date is required.');
      }

      return errors;
    },
  },

  methods: {
    clear() {
      this.$v.$reset();
      this.name = null;
      this.description = null;
      this.date = null;
      this.time = null;
    },
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // this.clear();
        this.onCreate({
          name: this.name,
          description: this.description,
          date: this.date,
          time: this.time,
        });
      }
    },
    closeModal() {
      this.clear();
      this.onClose();
    },
  },

  props: {
    show: {
      type: Boolean,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
    onCreate: {
      type: Function,
      required: true,
    },
    isCreating: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
  .input-group.input-group--error label {
    animation: none!important;
  }
</style>

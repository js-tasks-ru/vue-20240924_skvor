import { defineComponent, ref, watch} from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const meetupId = ref(1);
    const meetup = ref(null);

    watch(meetupId, async () => {
      meetup.value = await getMeetup(meetupId.value);
    }, {immediate: true})

    return {meetup, meetupId}
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary" type="button" :disabled="meetupId <= 1" @click="meetupId--">Предыдущий</button>
        <div class="radio-group" role="radiogroup">

          <div v-for="meetup in 5" class="radio-group__button">
            <input
              :id="'meetup-id-' + meetup"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="meetup"
              v-model="meetupId"
            />
            <label :for="'meetup-id-' + meetup" class="radio-group__label">{{ meetup }}</label>
          </div>
        </div>

        <button class="button button--secondary" type="button" :disabled="meetupId >= 5" @click="meetupId++">Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetup?.title }}</h1>
        </div>
      </div>

    </div>
  `,
})

import { defineComponent } from 'vue'
import WeatherCard from './weatherCard/WeatherCard.js'

export default defineComponent({
  name: 'WeatherCardList',

  props: {
    cardsList : {
      type: Array,
      required: true
    },
    icons: {
      type: Object,
      required: true
    }
  },

  components: {
    WeatherCard,
  },

  template: `
      <ul class="weather-list unstyled-list">
        <WeatherCard :card="card" :icons="icons" v-for="card in cardsList"/>
      </ul>
  `,
})

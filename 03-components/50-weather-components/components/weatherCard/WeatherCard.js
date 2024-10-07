import { defineComponent } from 'vue'
import WeatherDetailsInfo from './weatherDetails/WeatherDetailsInfo.js'
import WeatherCondition from './weatherCondition/WeatherCondition.js'
import WeatherAlert from './weatherAlert/WeatherAlert.js'
import WeatherCardInfo from './weatherCardInfo/WeatherCardInfo.js'

export default defineComponent({
  name: 'WeatherCard',

  props: {
    card : {
      type: Object,
      required: true
    },
    icons: {
      type: Object,
      required: true
    }
  },

  components: {
    WeatherDetailsInfo,
    WeatherCondition,
    WeatherAlert,
    WeatherCardInfo,
  },

  setup() {
    function isNight(time, sunriseTime, sunsetTime) {
      return time < sunriseTime || time > sunsetTime;
    }

    return {
      isNight,
    }
  },
  template: `
    <li class="weather-card" :class="{'weather-card--night': isNight(card.current.dt, card.current.sunrise, card.current.sunset)}">
      <WeatherAlert v-if="card.alert" :alert="card.alert" />
      <WeatherCardInfo :cardInfo="card" />
      <WeatherCondition :condition="card.current" :icons="icons"/>
      <WeatherDetailsInfo :details="card.current" />
    </li>
  `,
})

import { defineComponent } from 'vue';
import WeatherDetailItem from './item/WeatherDetailItem.js'

export default defineComponent({
  name: 'WeatherDetailsInfo',

  components: {
    WeatherDetailItem,
  },

  props: {
    details: {
      type: Object,
      required: true,
    },
  },

  setup() {
    function getPressureValue(pressure){
      return (pressure * 0.75).toFixed(0);
    }

    return {
      getPressureValue,
    }
  },

  template: `
          <div class="weather-details">
            <WeatherDetailItem label="Давление, мм рт. ст." :value="getPressureValue(details.pressure)" />
            <WeatherDetailItem label="Влажность, %" :value="details.humidity" />
            <WeatherDetailItem label="Облачность, %" :value="details.clouds" />
            <WeatherDetailItem label="Ветер, м/с" :value="details.wind_speed" />
          </div>
          `
})
